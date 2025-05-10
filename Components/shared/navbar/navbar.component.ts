import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { UserAuthService } from '../../../Core/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isUserMneuOpen: boolean = false;
  isLogged: boolean = true;

  constructor(
    public _UserAuthService: UserAuthService,
    private router: Router
  ) {
    // Subscribe to router events to close menus on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenus();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Get menu elements by ID
    const mobileMenu = document.getElementById('mobile-menu');
    const userMenuMobile = document.getElementById('user-menu-mobile');
    const userMenuDesktop = document.getElementById('user-menu-desktop');

    // Check if the click is on the toggle buttons
    const isMenuToggleButton =
      target.closest('button')?.getAttribute('aria-expanded') !== null;
    const isUserMenuToggleButton =
      target.closest('button')?.classList.contains('cursor-pointer') &&
      (target.closest('button')?.classList.contains('md:hidden') ||
        target.closest('button')?.classList.contains('w-12'));

    // If menus are open and the click is not on toggle buttons or inside the menus
    if (this.isMenuOpen || this.isUserMneuOpen) {
      const clickInsideMobileMenu = mobileMenu?.contains(target);
      const clickInsideUserMenuMobile = userMenuMobile?.contains(target);
      const clickInsideUserMenuDesktop = userMenuDesktop?.contains(target);

      if (
        !clickInsideMobileMenu &&
        !clickInsideUserMenuMobile &&
        !clickInsideUserMenuDesktop &&
        !isMenuToggleButton &&
        !isUserMenuToggleButton
      ) {
        this.closeMenus();
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isUserMneuOpen) this.isUserMneuOpen = false;
  }

  toggleUserMneu() {
    this.isUserMneuOpen = !this.isUserMneuOpen;
    if (this.isMenuOpen) this.isMenuOpen = false;
  }

  closeMenus() {
    this.isMenuOpen = false;
    this.isUserMneuOpen = false;
  }
}
