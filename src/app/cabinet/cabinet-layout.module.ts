import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'
import { CabinetLayoutComponent } from './cabinet-layout.component';
import { routing } from './cabinet-layout.routing';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    MenuComponent
  ],
  imports: [
    ReactiveFormsModule,
    routing
  ],
  providers: [],
})
export class CabinetLayoutModule { }
