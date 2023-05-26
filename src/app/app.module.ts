import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductManagerComponent } from './page/product-manager/product-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    LayoutAdminComponent,
    HomePageComponent,
    DashboardComponent,
    ProductManagerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
