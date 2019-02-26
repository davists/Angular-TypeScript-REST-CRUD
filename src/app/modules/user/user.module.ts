import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from '../shared/shared.module';

//import {UserListComponent} from './list/user-list.component';
import {UserRegisterComponent} from './form/user-register.component';
import {UserRouting} from "./user.routes";


//services
//import { UserService } from './user.service';

//module components

@NgModule({
    declarations: [
        //UserListComponent,
        UserRegisterComponent,

    ],
    imports: [
        SharedModule,
        CommonModule,
        UserRouting
    ],
    providers: [
        //UserService,
    ]
})

export class UserModule { }
