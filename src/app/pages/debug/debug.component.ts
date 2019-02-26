import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'debug-component',
    templateUrl: './debug.component.html',
    styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

    appName : string;
    appVersion : string;
    cookieEnabled : string;
    platform : string;
    userAgent : string;

    constructor() { }

    ngOnInit() {
        this.appName = "Browser Name: " + navigator.appName;
        this.appVersion = "Browser Version: " + navigator.appVersion;
        this.cookieEnabled = "Cookies Enabled: " + navigator.cookieEnabled;
        this.platform = "Platform: " + navigator.platform;
        this.userAgent = "User Agent: " + navigator.userAgent;
    }

}