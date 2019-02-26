/**
 * Created by davi on 7/25/17.
 */
import {Component, OnInit, ViewEncapsulation, OnDestroy, Input} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Router} from "@angular/router";
import {RestTableData} from "../../models/rest-table-data";
import {DomSanitizer} from "@angular/platform-browser";
import {environment} from '../../../environments/environment';
import { Http } from '@angular/http';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'rest-table-data',
    templateUrl: './table-data.component.html',
    styleUrls: ['./table-data-component.css'],
})

export class RestTableDataComponent extends RestService implements OnInit,OnDestroy {
    //docs for ng-table component http://valor-software.com/ng2-table/

    @Input() tableConfig: RestTableData;

    private rows:Array<any> = [];
    private columns:Array<any>;
    private data:Array<any>;

    //pagination parameters
    private page:number; //the default page after the table component loading
    private length:number; //total number of the items
    private numPages:number; //total number of the pages

    private itemsPerPage:number = 10; //number of the displaying items (rows) on a page
    private maxSize:number = 5; //number of the displaying pages before ...

    //filter Input
    filterStringInput: string = '';
    typing:any;

    private config:any = {
        paging: true,
        sorting: false,
        //sorting: {columns: this.columns},
        filtering: {filterString: ''},
        className: ['table-striped', 'table-bordered']
    };

    constructor(
        protected restTableData : RestTableData,
        protected router: Router,
        protected sanitizer: DomSanitizer,
        protected http: Http
    ){
        super(http);
    }

    ngOnInit():void {
        
        this.columns = this.tableConfig.columns;
        this.columns.push({title:'',name:'edit',className:'action-table'});
        this.columns.push({title:'',name:'remove',className:'action-table'});

        this.getTableData(this.tableConfig.apiRouteGetAll);
        this.onChangeTable(this.config);
        this.tableConfig.apiRouteGetAll += '?';
    }

    public getApiUrl(apiService:string)
    {
        switch (apiService){
            case "manager":
                this.apiEndPoint = environment.API_MANAGER_ENDPOINT;
                break;

            case "auth":
                this.apiEndPoint = environment.API_AUTH_ENDPOINT;
                break;

            default:
                this.apiEndPoint = environment.API_AUTH_ENDPOINT;
        }
    }
    private getTableData(apiUrl:string){
        this.getApiUrl(this.tableConfig.apiHost);

        this.rows = []; //clean rows;
        this.data = []; //clean data;

        this.getAllPaginate(apiUrl).subscribe(
            response => {

                if(!response.items){
                    return;
                }

                this.data = response.items;

                //console.log(this.data);

                this.page = response.currentPage;
                this.length = response.total;
                this.numPages = Math.round(this.length/this.itemsPerPage);

                this.data.forEach((row:any) => {
                    this.rows.push(row);
                });

            },
            error =>{
                console.log(error);
                //this.loadError = error;
            }
        );
    }

    private onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {

        //page change
        if(page.page != this.page){
            //paginate data
            this.changePage(page);
            this.config.filtering = {filterString: ''};
            this.filterStringInput = '';
        }

        //filter change
        if(page.page == this.page) {

            if (config.filtering) {
                Object.assign(this.config.filtering, config.filtering);
            }

            //search for data
            this.changeFilter(this.config);
        }

    }

    private changeFilter(config:any){
        //this.cleanTableData();

        if(config.filtering.filterString.length > 2){
            //console.log(config.filtering.filterString);
            let url = this.tableConfig.apiRouteGetAll +'&search='+config.filtering.filterString;

            this.typing = clearTimeout(this.typing);

            this.typing = setTimeout( () => {
                //console.log(url);
                this.getTableData(url);
            }, 300);
        }
    }

    private restartTableData(){
        this.getTableData(this.tableConfig.apiRouteGetAll);
        this.config.filtering = {filterString: ''};
        this.filterStringInput = '';
    }

    private changePage(page:any){
        //this.cleanTableData();

        //console.log(page);
        let url = this.tableConfig.apiRouteGetAll +'&page='+page.page;
        //console.log(url);
        this.getTableData(url);
    }

    private cleanTableData(){
        Object.assign(this.data, {});
    }

    private getData(row, propertyName) {
        return propertyName.split('.').reduce(function (prev, curr) {
            return prev[curr];
        }, row);
    }

    private actionEdit(id)
    {
        this.router.navigate([this.tableConfig.angularRouteBase,id]);
    }

    private actionCustom(id)
    {
        this.router.navigate([this.tableConfig.customButton.angularRoute,id]);
    }

    private actionRemove(offer) {
        this.getApiUrl(this.tableConfig.apiHost);

        if (confirm("Deseja excluir este registro " + offer.name + "?")) {
            //console.log(offer);
            let index = this.data.indexOf(offer);
            this.rows.splice(index, 1);

            this.remove(this.tableConfig.apiRouteBase,offer.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete user.");
                        // Revert the view back to its original state
                        this.data.splice(index, 0, offer);
                    });
        }

    }

    ngOnDestroy()
    {

    }
}