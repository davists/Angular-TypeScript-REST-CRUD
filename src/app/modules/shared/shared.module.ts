import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Configuration } from '../../app.constants';
import { ChartModule } from 'angular2-chartjs';
import { TextMaskModule } from 'angular2-text-mask';


//shared widgets
import {AppHeaderComponent} from '../../widgets/app-header';
import {AppFooterComponent} from '../../widgets/app-footer';
import {MenuAsideComponent} from '../../widgets/menu-aside';
import {UserBoxComponent} from "../../widgets/user-box/user-box.component";
import {TasksBoxComponent} from "../../widgets/tasks-box/tasks-box.component";
import {NotificationBoxComponent} from "../../widgets/notification-box/notification-box.component";
import {MessagesBoxComponent} from "../../widgets/messages-box/messages-box.component";

//shared components
import { LayoutsAuthComponent } from '../../pages/layouts/auth/auth';

//shared services
import { AdminLTETranslateService } from '../../services/translate.service';
import { RestService } from '../../services/rest.service';
import { CanActivateGuard } from '../../services/guard.service';
import {MessagesService} from "../../services/messages.service";
import {NotificationService} from "../../services/notification.service";
import {BreadcrumbService} from "../../services/breadcrumb.service";
import {Ng2TableModule} from "ng2-table";
import {PaginationModule, TabsModule, ModalModule} from "ngx-bootstrap";
import {RestTableDataComponent} from "../../widgets/table-data/table-data.component";
import {FileUploadModule} from "ng2-file-upload";
import {SelectModule} from "ng2-select";

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
}

@NgModule( {
    declarations: [
        UserBoxComponent,
        TasksBoxComponent,
        NotificationBoxComponent,
        MessagesBoxComponent,
        AppHeaderComponent,
        AppFooterComponent,
        MenuAsideComponent,
        LayoutsAuthComponent,
        RestTableDataComponent,
    ],
    imports: [
        CommonModule,
        DatepickerModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        TranslateModule.forRoot({
            deps: [Http],
            provide: TranslateLoader,
            useFactory: (createTranslateLoader)
        }),
        ToasterModule,
        Ng2TableModule,
        PaginationModule,
        TabsModule,
        FileUploadModule,
        ModalModule,
        SelectModule,
        TextMaskModule,
    ],
    providers: [
        AdminLTETranslateService,
        RestService,
        MessagesService,
        NotificationService,
        BreadcrumbService,
        Configuration,
        CanActivateGuard,
        FormBuilder,
    ],
    exports:[
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ChartModule,
        TextMaskModule,
        Ng2TableModule,
        PaginationModule,
        TabsModule,
        RestTableDataComponent,
        FileUploadModule,
        ModalModule,
        SelectModule,
    ],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class SharedModule { }
