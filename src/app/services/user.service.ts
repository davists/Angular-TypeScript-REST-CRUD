import { User } from '../models/user';
import {Injectable, Compiler} from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    public currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);

    constructor(
        private router: Router,
        private _compiler: Compiler
    ) {
        // TODO
    }

    public setCurrentUser(user: User)
    {
        this.currentUser.next(user);
    }

    public logout()
    {
        sessionStorage.removeItem('jwt_key');

        let user = new User();
        user.connected = false;

        this.setCurrentUser(user);
        this.router.navigate(['login']);
    }
}


