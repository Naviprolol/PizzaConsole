import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/auth.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
