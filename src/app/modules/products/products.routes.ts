import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../../services/guard.service';

//layout
import { LayoutsAuthComponent } from '../../pages/layouts/auth/auth';

//components
import { ProductsListComponent } from './list/products-list.component';
import { ProductsRegisterComponent } from './register/products-register.component';

const productsRoutes: Routes = [

    {
        children: [
            { path: '', canActivate: [CanActivateGuard], component: ProductsListComponent},
            { path: 'new', canActivate: [CanActivateGuard], component: ProductsRegisterComponent},
            { path: ':id', canActivate: [CanActivateGuard], component: ProductsRegisterComponent},
        ],
        component: LayoutsAuthComponent,
        path: ''
    }

];

export const ProductsRouting = RouterModule.forChild(productsRoutes);

