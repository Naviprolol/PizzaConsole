import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavComponent } from '../components/nav/nav.component';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    NavComponent
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
