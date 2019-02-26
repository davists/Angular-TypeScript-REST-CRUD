import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { Http } from '@angular/http';
import {RestService} from "./rest.service";

@Injectable()
export class AuthService extends RestService{

    constructor(protected http: Http){
        super(http)
        this.apiEndPoint = environment.API_AUTH_ENDPOINT;
        this.platform = "manager";
    }
}
