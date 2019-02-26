import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    private connected: boolean = false;

    constructor(
        private router: Router,
        private user: UserService
    ) {
        this.user.currentUser.subscribe((user) => {
            this.connected = user.connected;
        });
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // test here if you user is logged.

        if (sessionStorage.getItem('jwt_token') && this.connected) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});

        return false;
    }
}
