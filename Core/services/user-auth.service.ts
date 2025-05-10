import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  forget,
  login,
  ResetPassword,
  Rest,
  signUp,
} from '../interfaces/user-auth';
import { jwtDecode } from './../../../../node_modules/jwt-decode/build/cjs/index';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private baseApiUrl: string = 'https://aston.runasp.net/';
  isUserLogin: BehaviorSubject<any> = new BehaviorSubject(false);
  userId: string = '';
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    // Check token on service initialization
    const token = localStorage.getItem('token');
    if (token && this.isTokenValid(token)) {
      this.isUserLogin.next(true);
    } else {
      localStorage.removeItem('token');
      this.isUserLogin.next(false);
    }
  }

  login(data: login): Observable<any> {
    return this._HttpClient.post(`${this.baseApiUrl}Login`, data);
  }

  register(data: signUp): Observable<any> {
    return this._HttpClient.post(`${this.baseApiUrl}CustomerReg`, data, {
      responseType: 'text',
    });
  }

  forgetPassword(data: forget): Observable<any> {
    return this._HttpClient.post(
      `${this.baseApiUrl}api/Auth/forgot-password`,
      data
    );
  }

  verifyResetCode(data: Rest): Observable<any> {
    return this._HttpClient.post(
      `${this.baseApiUrl}api/Auth/verify-Code`,
      data
    );
  }

  resendverificationcode(email: string): Observable<any> {
    return this._HttpClient.post(
      `${this.baseApiUrl}api/Auth/resend-verification-code`,
      { email }
    );
  }

  resetPassword(data: ResetPassword): Observable<any> {
    return this._HttpClient.post(
      `${this.baseApiUrl}api/Auth/reset-password`,
      data
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isUserLogin.next(false);
    this._Router.navigate(['/login']);
  }

  isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      this.userId = decodedToken.ID;
      const isExpired = decodedToken.exp * 1000 < Date.now();
      return !isExpired;
    } catch {
      return false;
    }
  }
}
