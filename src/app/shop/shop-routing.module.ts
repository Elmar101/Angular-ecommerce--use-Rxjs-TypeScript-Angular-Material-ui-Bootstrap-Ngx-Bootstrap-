import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartFullDetailComponent } from './pages/cart-full-detail/cart-full-detail.component';

import { ShopComponent } from './shop.component';

/* const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    data: { breadcrumb: 'Əsas Seyfe' },
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'cart',
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
    ],
  },
];
 */
@NgModule({
  //imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
