import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {DebugComponent} from "./pages/debug/debug.component";

const routes: Routes = [

    { path: 'home', loadChildren: './modules/home/home.module#HomeModule'},
    { path: 'products', loadChildren: './modules/products/products.module#ProductsModule'},

    //login and not-found
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'debug', component: DebugComponent, pathMatch: 'full'},

    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
