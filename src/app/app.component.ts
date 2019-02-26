import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor( ) {
      // TODO
        moment.locale('pt-br');
    }

    public ngOnInit() {
      // TODO
    }

}
