import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../../services/guard.service';

//layout
import { LayoutsAuthComponent } from '../../pages/layouts/auth/auth';

//components
//import {UserListComponent} from './list/user-list.component';
import {UserRegisterComponent} from './form/user-register.component';

const userRoutes: Routes = [

    {
        children: [
            //{ path: 'list', canActivate: [CanActivateGuard], component: UserListComponent},
            //{ path: 'new', canActivate: [CanActivateGuard], component: UserRegisterComponent},
            { path: ':id', canActivate: [CanActivateGuard], component:  UserRegisterComponent},
        ],
        component: LayoutsAuthComponent,
        path: ''
    }

];

export const UserRouting = RouterModule.forChild(userRoutes);

