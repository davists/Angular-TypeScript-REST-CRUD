import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {Product} from "../../../models/catalog/product";
import {ManagerService} from "../../../services/manager.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'products-register',
    styleUrls: ['./products-register.component.css'],
    templateUrl: './products-register.component.html',
})

export class ProductsRegisterComponent implements OnInit, OnDestroy {

    form: FormGroup;
    title:string;
    product:Product = new Product();
    formError : any;
    logedUser: User;
    categories:any;

    //upload file
    fileUploader: any;
    selectedFile: any;
    uploadError = false;
    uploading = false;
    timer: any;
    allowedSizeStatus = true;
    allowedTypeStatus = true;

    fileUploadedUrl : string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private managerService: ManagerService,
        private userService: UserService
    ) {

        this.form = formBuilder.group(new Product());

        this.userService.currentUser.subscribe((user) => {
            this.logedUser = user;
        });

        this.fileUploader = this.uploadFactory('products');
    }

    public refreshValue(value:any):void {
        let selectedItems = [];

        value.map((item:any) => {
            selectedItems.push({'category':item.id});
        });

        this.form.patchValue({categories: selectedItems});
    }

    public ngOnInit() {

        this.managerService.getAllItems(`petshop/${this.logedUser.company}/categories`)
            .subscribe(
                categories => {

                    this.categories = categories
                }
            );

        let id = this.route.params.subscribe(params => {

            let id = params['id'];

            this.title = id ? 'Edição de Produto' : 'Novo Produto';

            if (!id)
                return;

            this.managerService.get('products',id)
                .subscribe(
                    item =>{
                        this.product = new Product(item);
                        //console.log(this.product)

                        if(typeof this.product.categories !== 'undefined' && this.product.categories.length > 0){

                            try {

                                let selectedItems = []
                                this.product.categories.map((item:any) => {
                                    selectedItems.push({'category':item.id});
                                });
                                this.form.patchValue({categories: selectedItems});
                            }
                            catch(err) {
                                //console.log(err)
                            }
                        }

                    },
                    response => {
                        //console.log(response.message);
                        if (response.code == 403) {
                            this.formError = response.message;
                        }
                    });
        });
    }

    save() {
        let result;

        let userValue = this.form.value;

        //console.log(userValue);

        if (userValue.id){
            result = this.managerService.update('products',userValue.id,userValue);
        } else {
            result = this.managerService.create('products',userValue);
        }

        result.subscribe(
            data => this.router.navigate(['products']),
            response => {
                //if (response.code == 403)
                this.formError = response;
                window.scrollTo(0,0);
            }
        );
    }

    public ngOnDestroy(){}

    //upload functions
    removeFile(){
        this.fileUploadedUrl = '';
        this.product.image = '';
    }

    remove(uploader:FileUploader) {
        uploader.clearQueue();
        this.selectedFile = null;
        this.uploadError = false;
    }

    errorHandle(res, status) {
        console.log(res);
        switch (status) {
            case 400:
                alert('Erro ao enviar o arquivo. Tente novamente.');
                break;
            default:
                alert('Erro ao enviar o arquivo. Tente novamente mais tarde.');
                break;
        }
        this.uploadError = true;
    }

    rejectHandle(file, error, uploader:FileUploader) {
        switch (error.name) {
            case 'fileSize' :
                this.allowedSizeStatus = false;
                break;
            case 'extension':
            case 'fileType' :
                this.allowedTypeStatus = false;
                break;
            case 'queueLimit':
                const fileTemp = file;
                uploader.clearQueue();
                uploader.addToQueue([ fileTemp ]);
                break;
            default:
                console.log(error.name);
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.allowedSizeStatus = true;
            this.allowedTypeStatus = true;
        }, 3000);
    }

    resultHandle(file, response, status, uploader:FileUploader) {
        this.remove(uploader);
        let fileUploaded = JSON.parse(response)['data'];
        this.fileUploadedUrl = fileUploaded.file_url;
        this.product.image = this.fileUploadedUrl;
    }

    uploadFactory(fileType:string): any{

        let uploader = new FileUploader(
            {
                url: `${this.managerService.apiEndPoint}file/upload`,
                filters: [
                    {
                        name: 'extension',
                        fn: (item: any): boolean => {
                            const fileExtension = item.name.slice(item.name.lastIndexOf('.') + 1).toLowerCase();
                            return (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png');
                        }
                    }
                ],
                headers: [
                    {name: 'Authorization', value: `Bearer ${ this.managerService.getTokenJWT() }`}
                ],
                maxFileSize: 2e+6,
                queueLimit: 1,
                removeAfterUpload: false
            }
        );

        uploader.setOptions({
            additionalParameter: {
                fileType: fileType,
                companyId: this.logedUser.company
            }
        });

        uploader.onBeforeUploadItem = (item) => {
            item.method = "POST";
            item.withCredentials = false;
        };

        uploader.onAfterAddingFile = (fileItem) => {
            this.selectedFile = fileItem;
            this.selectedFile.upload();
        };

        uploader.onWhenAddingFileFailed = (file, error) =>{

            this.rejectHandle(file, error, uploader);
        };

        uploader.onErrorItem = (file, res, status) =>{
            this.errorHandle(res, status);
        };

        uploader.onProgressItem = () => {

            this.uploading = true;

        };

        uploader.onSuccessItem = (file, response, status) => {
            this.resultHandle(file, response, status, uploader);
            this.uploading = false;
        };

        return uploader;
    }
}
