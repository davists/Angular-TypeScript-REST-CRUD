import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-menu-aside',
    styleUrls: ['./menu-aside.component.css'],
    templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit,AfterViewInit {
    dateNow: Date = new Date()
    width: number
    logedUser: User

    constructor(private userService: UserService)
    {
        this.userService.currentUser.subscribe((user) => {
            this.logedUser = user
        });
    }

    public ngOnInit() {

        //refresh datetime every minute
        setInterval( () => {
            this.dateNow = new Date()
        }, 30000)
    }

    ngAfterViewInit() {
        this.width = window.innerWidth
        if(this.width < 768){
            let body = document.getElementsByTagName("body")
            body[0].classList.remove("sidebar-open")
            body[1].classList.remove("sidebar-open")
        }
    }

}

