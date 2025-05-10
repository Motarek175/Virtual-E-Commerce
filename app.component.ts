import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { BehaviorSubject, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserAuthService } from './Core/services/user-auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-Commerce';
  authPage: BehaviorSubject<boolean> = new BehaviorSubject(false);
  notCustomerPage: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private _UserAuthService: UserAuthService
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const authRoutes = [
          '/login',
          '/signup',
          '/forget-email',
          '/reset-code',
          '/reset-password',
          '/verify-email',
          '/not-found',
        ];
        const currentUrl = event.urlAfterRedirects;
        this.authPage.next(authRoutes.includes(currentUrl));
        const notCustomerRoutes = ['/adminDashboard', '/deliveryDashboard','/merchantDashboard'];
        const currentUrl1 = event.urlAfterRedirects;
        this.notCustomerPage.next(notCustomerRoutes.includes(currentUrl1));
      });
  }
  showButton: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (window.scrollY > 550) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  @HostListener('window:unload', ['$event'])
  onUnload(event: Event): void {
    this._UserAuthService.logout();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
