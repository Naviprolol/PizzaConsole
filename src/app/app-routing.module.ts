import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { OrdersPageComponent } from "./components/orders-page/orders-page.component";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { StaffPageComponent } from "./components/staff-page/staff-page.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cabinet',
    pathMatch: 'full',
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./cabinet/cabinet-layout.module').then(m => m.CabinetLayoutModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login-layout.module').then(m => m.LoginLayoutModule)  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
