import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  signInForminvalid: boolean = false
  errorMessage: string = ''

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSignIn() {
    const values = this.signInForm.value;

    if (this.signInForm.valid) {
      if (values.password === values.confirmPassword) {
        this.authService.signIn(
          values.name,
          values.email,
          values.password,
        );
        this.router.navigate(['/', 'module-home', 'home', 'videogames'])
      } else {
        this.signInForminvalid = true
        this.errorMessage = 'Las contraseñas no coinciden'
        setTimeout(() => {
          this.signInForminvalid = false;
        }, 
        3000);
      }
    } else {
      this.signInForminvalid = true
      this.errorMessage = 'Ingrese todos los datos'
      setTimeout(() => {
        this.signInForminvalid = false;
      }, 
      3000);
    }
  }

  onLogin() {
    this.router.navigate(['/', 'module-auth', 'login']);
  }
}
