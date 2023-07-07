import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { OrdersPageComponent } from "./components/orders-page/orders-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { StaffPageComponent } from "./components/staff-page/staff-page.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'orders', component: OrdersPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'staff', component: StaffPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
