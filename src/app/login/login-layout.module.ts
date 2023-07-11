import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'
import { LoginLayoutComponent } from './login-layout.component';
import { routing } from './login-layout.routing';

@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    routing
  ],
  providers: [],
})
export class LoginLayoutModule { }
