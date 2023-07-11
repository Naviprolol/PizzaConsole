import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cabinet/orders',
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
