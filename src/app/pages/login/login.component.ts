import {Component, OnInit, OnDestroy} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {

    public email : any;
    public password : any;
    public loginError: any;
    public returnUrl:string;
    private subscriptions : Subscription = new Subscription;

    constructor(
        private userServ: UserService,
        private router: Router,
        private authServ: AuthService,
        private route:ActivatedRoute
    ) {
        sessionStorage.removeItem('jwt_key');
    }

    public ngOnInit()
    {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    onSubmit(){
        //this.loading = true;

        this.subscriptions.add(this.authServ.login(this.email,this.password).subscribe(

            response => {
                this.subscriptions.add(this.authServ.me().subscribe(
                    meInfo => {
                        //console.log(meInfo);
                        let user = new User(meInfo);
                        user.connected = true;

                        this.userServ.setCurrentUser(user);
                        this.router.navigate([this.returnUrl]);
                    }
                ));

            },
            error => {
                //this.loading = false;
                //console.log(error);
                this.loginError = error;
            }));

    }

    ngOnDestroy(){
        this.subscriptions.unsubscribe();
    }

}
