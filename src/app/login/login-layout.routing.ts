import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { LoginLayoutComponent } from "./login-layout.component";

const routes: Routes = [
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                pathMatch: 'full'
            }
        ]
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);