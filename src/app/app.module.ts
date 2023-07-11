import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginPageComponent } from './components/login-page/login-page.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { StaffPageComponent } from './components/staff-page/staff-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OrdersPageComponent,
    ProductsPageComponent,
    StaffPageComponent,
    NotFoundPageComponent,
    NavComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
