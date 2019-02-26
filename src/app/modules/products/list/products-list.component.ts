import { Component, OnInit, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {RestTableData} from "../../../models/rest-table-data";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'products-list',
    styleUrls: ['./products-list.component.css'],
    templateUrl: './products-list.component.html'
})

export class ProductsListComponent implements OnInit,AfterViewInit {
    private tableData : RestTableData = new RestTableData();
    width:number;

    currentUser : User;

    constructor(private userService: UserService) {

        this.userService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
    }

    public ngOnInit() {

        this.tableData.columns = [
            {title: 'Produto', name: 'name'},
            {title: 'Preço', name: 'price'},
        ];

        this.tableData.apiHost = 'manager';
        this.tableData.apiRouteBase = 'products';
        this.tableData.apiRouteGetAll = 'products';
        this.tableData.angularRouteBase = '/products';
    }

    ngAfterViewInit() {
        this.width = window.innerWidth;
        if(this.width < 768){
            let body = document.getElementsByTagName("body");
            body[0].classList.remove("sidebar-open");
            body[1].classList.remove("sidebar-open");
        }
    }

}

