import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService, private router: Router) { }

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
    console.log('Сабмит!');

    this.form.disable();

    this.aSub = this.auth.login(this.form.value.email, this.form.value.password).subscribe(
      () => {
        this.router.navigate(['/cabinet/orders']); // Навигация на страницу cabinet/orders после успешного входа
      },
      error => {
        console.warn(error);
        this.form.enable();
      }
    );
  }

}
