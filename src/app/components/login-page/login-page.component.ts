import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsoleApiService } from 'src/app/services/console-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  aSub!: Subscription;
  isSuccessful: boolean = false;
  isError: boolean = false;

  constructor(private router: Router, private api: ConsoleApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();

    this.aSub = this.api.login({ email: this.form.value.email, password: this.form.value.password }).subscribe(
      () => {
        this.isError = false;
        this.isSuccessful = true;
        setTimeout(() => {
          this.router.navigate(['/cabinet/orders']);
        }, 1000);
      },
      error => {
        console.warn(error);
        this.isError = true;
        this.form.enable();
      }
    );
  }
}
