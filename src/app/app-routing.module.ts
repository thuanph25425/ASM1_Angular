import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductManagerComponent } from './page/product-manager/product-manager.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'admin',component: LayoutAdminComponent, children: [
    {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'product', component: ProductListComponent},
    {path: 'product/add', component: ProductAddComponent},
    {path: 'product/:id/edit', component: ProductEditComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
