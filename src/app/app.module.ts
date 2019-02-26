// external module
import {CommonModule,HashLocationStrategy, LocationStrategy} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Configuration } from './app.constants';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { RestService } from './services/rest.service';
import { LoginComponent } from './pages/login/login.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import { routing } from './app.routes';
import {PaginationModule, TabsModule, ModalModule} from "ngx-bootstrap";
import {Ng2TableModule} from "ng2-table";
import {FileUploadModule} from "ng2-file-upload";
import {DebugComponent} from "./pages/debug/debug.component";
import {SelectModule} from "ng2-select";
import {AuthService} from "./services/auth.service";
import {ManagerService} from "./services/manager.service";

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
}

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        DebugComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        TranslateModule.forRoot({
            deps: [Http],
            provide: TranslateLoader,
            useFactory: (createTranslateLoader)
        }),
        PaginationModule.forRoot(),
        Ng2TableModule,
        TabsModule,
        routing,
        FileUploadModule,
        ModalModule.forRoot(),
        SelectModule
    ],
    providers: [
        UserService,
        RestService,
        AuthService,
        ManagerService,
        Configuration,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    exports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule { }
