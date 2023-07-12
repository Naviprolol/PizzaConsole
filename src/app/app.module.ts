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
import { VolumeCalculusPipe } from "./shared/pipes/volumeCalculus.pipe";
import { ClickStopPropagationDirective } from './shared/directives/click-stop-propagation.directive';
import { NotificationsPageComponent } from './components/notifications-page/notifications-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    OrdersPageComponent,
    ProductsPageComponent,
    StaffPageComponent,
    NotFoundPageComponent,
    VolumeCalculusPipe,
    ClickStopPropagationDirective,
    NotificationsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
