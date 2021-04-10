import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ServerErrorComponent } from './component/server-error/server-error.component';

import { CartDetailComponent } from './shop/pages/cart-detail/cart-detail.component';

import { CartFullDetailComponent } from './shop/pages/cart-full-detail/cart-full-detail.component';
import { CheckoutComponent } from './shop/pages/checkout/checkout.component';
import { ContactComponent } from './shop/pages/contact/contact.component';
import { HomeComponent } from './shop/pages/home/home.component';
import { LoginComponent } from './shop/pages/login/login.component';
import { RegisterComponent } from './shop/pages/register/register.component';
import { ServicesComponent } from './shop/pages/services/services.component';


import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    data: { breadcrumb: 'Əsas Seyfe' },
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'product',
        component: HomeComponent,
        data: { breadcrumb: 'Mehsullar' },
      },
      {
        path: 'contact',
        component:ContactComponent,
        data: { breadcrumb: 'Mağazalar' },
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: { breadcrumb: 'servislər' },
      },
      {
        path: 'card',
        component: CartDetailComponent,
        data: { breadcrumb: 'Sebet' },
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: { breadcrumb: 'Yoxla' },
      },
      {
        path: 'cartFullDetail/:id',
        component: CartFullDetailComponent,
        data: { breadcrumb: { alias: 'Məhsul Hakkinda' } },
      },
      {
        path: 'login',
        component:LoginComponent,
        data: { breadcrumb: 'Daxil ol' }
      },
      {
        path: 'register',
        component:RegisterComponent,
        data: { breadcrumb: 'Hesab Yarat' }
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
