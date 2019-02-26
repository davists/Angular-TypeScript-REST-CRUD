import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from '../shared/shared.module';
import {ProductsRouting} from "./products.routes";
import {ProductsListComponent} from "./list/products-list.component";
import {ProductsRegisterComponent} from "./register/products-register.component";
import {RestTableData} from "../../models/rest-table-data";

//module components
@NgModule({
    declarations: [
        ProductsListComponent,
        ProductsRegisterComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductsRouting
    ],
    providers: [
       RestTableData
    ]
})

export class ProductsModule { }
