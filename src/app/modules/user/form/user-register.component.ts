import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'user-form',
    styleUrls: ['./user-register.component.css'],
    templateUrl: './user-register.component.html'
})

export class UserRegisterComponent implements OnInit {

    form: FormGroup;
    model : User = new User();
    currentUser : User;

    formError: any;
    savedData: any;
    loading: boolean = false;

    states: any = [];
    cities: any = [];


    constructor(
        private breadServ: BreadcrumbService,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        private userService: UserService
    ) {

        this.form = formBuilder.group(new User());
        this.form.disable();

        this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
    }

    public ngOnInit() {
        this.authService.me()
            .subscribe(
                model =>{
                    this.model = new User(model);
                    //console.log(this.model);
                },
                response => {
                    //console.log(response.message);
                    if (response.code == 403) {
                        this.formError = response.message;
                    }
                });
    }

}

