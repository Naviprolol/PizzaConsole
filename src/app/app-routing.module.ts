import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
