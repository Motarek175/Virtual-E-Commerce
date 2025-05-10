import { jwtDecode } from './../../../../../node_modules/jwt-decode/build/cjs/index';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../../../Core/services/user-auth.service';
import { login } from '../../../Core/interfaces/user-auth';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _UserAuthService: UserAuthService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    // Minimal check for redundancy
    if (this._UserAuthService.isUserLogin.getValue()) {
      this._Router.navigate(['/home']);
    }
  }

  login() {
    const data: login = {
      email: this.loginForm.get('email')?.value || '',
      password: this.loginForm.get('password')?.value || '',
    };
    this._UserAuthService.login(data).subscribe({
      next: (res) => {
        // Decode the JWT token to get the role
        const decodedToken: any = jwtDecode(res.token);
        const userRole = decodedToken.Role;

        // Store token in localStorage
        localStorage.setItem('token', res.token);
        this._UserAuthService.isUserLogin.next(true);

        // Navigate based on role
        let redirectRoute: string;
        switch (userRole) {
          case 'Customer':
            redirectRoute = '/home';
            break;
          case 'Admin':
            redirectRoute = '/adminDashboard';
            break;
          case 'DeliveryRep':
            redirectRoute = '/deliveryDashboard';
            break;
          case 'Merchant':
            redirectRoute = '/merchantDashboard';
            break;
          default:
            redirectRoute = '/home'; // Fallback for unexpected roles
        }

        Swal.fire({
          title: 'Login Successful',
          text: 'You have been logged in successfully',
          icon: 'success',
          showConfirmButton: true,
        }).then(() => {
          this._Router.navigate([redirectRoute]);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: err.error.message || 'Invalid email or password',
        });
      },
    });
  }
}
