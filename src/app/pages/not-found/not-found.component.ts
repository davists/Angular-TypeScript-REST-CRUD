import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

    redirectHomeLink: string = "/home";

    redirectSupportLink: string = "/central-de-atendimento";

    constructor() { }

    ngOnInit() {

        if(!sessionStorage.getItem('jwt_token')){
            this.redirectHomeLink = "/login";
        }

    }

}