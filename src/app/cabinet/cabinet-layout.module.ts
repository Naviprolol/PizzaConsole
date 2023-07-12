import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';
import { OrderModalComponent } from '../components/modals/order-modal/order-modal.component';
import { ModalService } from '../services/modal.service';
import { OrdersPageComponent } from '../components/orders-page/orders-page.component';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    NavComponent,
    OrderModalComponent,
    OrdersPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    routing,
    CommonModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [ModalService],
})
export class CabinetLayoutModule { }
