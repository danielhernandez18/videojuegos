import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  opcionSelected: string = '';
  varSelected: string = '';
  loginForminvalid: boolean = false
  errorMessage: string = ''

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const isValidUser = this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value,
      );

      if (isValidUser) {
        this.router.navigate(['/', 'module-home', 'home', 'videogames'])
      } else {
        this.loginForm.markAllAsTouched();
        this.loginForminvalid = true
        this.errorMessage = 'Usuario no encontrado'
        setTimeout(() => {
          this.loginForminvalid = false;
        }, 
        3000);
      }
    } else {
      this.loginForm.markAllAsTouched();
      this.errorMessage = 'Ingrese todos los datos'
      this.loginForminvalid = true
      setTimeout(() => {
        this.loginForminvalid = false;
      }, 
      3000);
    }
  }

  onSignIn() {
    this.router.navigate(['/', 'module-auth', 'sign-in']);
  }
}
