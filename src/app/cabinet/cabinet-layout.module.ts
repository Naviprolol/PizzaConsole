import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { MenuComponent } from '../components/menu/menu.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    MenuComponent,
  ],
  imports: [
    ReactiveFormsModule,
    routing,
    CommonModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
})
export class CabinetLayoutModule { }
