import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {PaginatedData} from "../models/paginated-data";

@Injectable()
export class RestService {
    private headers: Headers;
    
    public jwtCached: boolean = false;
    public apiEndPoint : string;
    public platform : string;

    constructor(protected http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    // REST functions
    public login(email:string, password:string): any {

        let credentials : any = {
            email: email,
            password: password,
            platform: this.platform,
        }

        let userCredentials = JSON.stringify(credentials);

        return this.http.post(this.apiEndPoint + 'login', userCredentials, { headers: this.headers })
            .map((response: Response) => {
                let data = response.json();

                let token = {jwt:data.data.jwt};
                sessionStorage.setItem( 'jwt_token', JSON.stringify(token));

                return data;
            })
            .catch(this.handleError);
    }

    public me(): Observable<any[]> {
        this.setAuthorizationHeader();

        return this.http.get(this.apiEndPoint + 'me', { headers: this.headers })
            .map((response: Response) => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    public getAll(service:string): Observable<any[]> {
        this.setAuthorizationHeader();

        return this.http.get(this.apiEndPoint + service, { headers: this.headers })
            .map((response: Response) => {
                //console.log(response.json());
                return response.json().data;
            })
            .catch(this.handleError);
    }

    public getAllItems(service:string): Observable<any[]> {
        this.setAuthorizationHeader();

        return this.http.get(this.apiEndPoint + service + '?page=all', { headers: this.headers })
            .map((response: Response) => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    public getAllPaginate(service:string): Observable<PaginatedData> {
        this.setAuthorizationHeader();

        return this.http.get(this.apiEndPoint + service, { headers: this.headers })
            .map((response: Response) => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    public get(service:string, id: any): Observable<any> {
        this.setAuthorizationHeader();

        return this.http.get(this.apiEndPoint + service + '/' + id, { headers: this.headers })
            .map((response: Response) => {
                return response.json().data;
            })
            .catch(this.handleError);
    }

    public post(service:string, item: any): Observable<any> {
        this.setAuthorizationHeader();

        let toAdd = JSON.stringify(item);

        return this.http.post(this.apiEndPoint + service, toAdd, { headers: this.headers })
            .map((response: Response) => response.json().data)
            .catch(this.handleError);
    }

    public create(service:string, item: any): Observable<any> {
        this.setAuthorizationHeader();

        let toAdd = JSON.stringify(item);

        return this.http.post(this.apiEndPoint + service, toAdd, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public update(service:string, id: number, itemToUpdate: any): Observable<any> {
        this.setAuthorizationHeader();

        let toUpdate = JSON.stringify(itemToUpdate);

        return this.http.put(this.apiEndPoint + service + '/' + id, toUpdate, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    public remove(service:string, id: number): Observable<any> {
        this.setAuthorizationHeader();

        return this.http.delete(this.apiEndPoint + service + '/' + id, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        //console.error(error.json().message);
        return Observable.throw(error.json().message || 'Server error');
    }

    public jwtDecode(jwt:any) {
        let content = jwt.split('.');
        let payload = atob(content[1]);
        return JSON.parse(payload).data;
    }

    public getTokenJWT() : any {
        let jwt = '';

        if(sessionStorage.getItem('jwt_token')){
            jwt = JSON.parse(sessionStorage.getItem('jwt_token')).jwt;
        }

        //console.log(jwt);
        return jwt;
    }

    private setAuthorizationHeader():void {
        if(!this.jwtCached){
            this.headers.append('Authorization', 'Bearer ' +  this.getTokenJWT());
            this.jwtCached = true;
        }
    }

    public saveToLocalStorage(storageKey:any, data:any) : void {
        let obj = {
            data: data,
            date: Date.now()
        };

        sessionStorage.setItem(storageKey, JSON.stringify(obj));
    }

    public getFromLocalStorage(storageKey:any, maxtime = 0): Array<any> {
        let json = sessionStorage.getItem(storageKey);
        if ( json ) {
            let obj = JSON.parse(json);
            if ( obj && (obj.date < (Date.now() - maxtime) ) ) {
                return obj;
            }
        }
    }

}
