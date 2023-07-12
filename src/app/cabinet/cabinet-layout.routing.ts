import { RouterModule, Routes } from "@angular/router";
import { CabinetLayoutComponent } from "./cabinet-layout.component";
import { OrdersPageComponent } from "../components/orders-page/orders-page.component";
import { StaffPageComponent } from "../components/staff-page/staff-page.component";
import { ModuleWithProviders } from "@angular/core";
import { IngredientsPageComponent } from "../components/ingredients-page/ingredients-page.component";
import { NotificationsPageComponent } from "../components/notifications-page/notifications-page.component";
import { AuthGuard } from "../shared/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: CabinetLayoutComponent,
    children: [
      {
        path: 'staff',
        component: StaffPageComponent
      },
      {
        path: 'orders',
        component: OrdersPageComponent
      },
      {
        path: 'ingredients',
        component: IngredientsPageComponent
      },
      {
        path: 'notifications',
        component: NotificationsPageComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
