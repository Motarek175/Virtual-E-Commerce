import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ImageCompareModule } from 'primeng/imagecompare';
import { GalleriaModule } from 'primeng/galleria';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TrackingService } from '../../../Core/services/tracking.service';
import { UserAuthService } from '../../../Core/services/user-auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TagModule,
    CarouselModule,
    CommonModule,
    InputTextModule,
    ImageCompareModule,
    GalleriaModule,
    RouterLink,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private trackingService: TrackingService,
    public _UserAuthService: UserAuthService
  ) {}
  // landing images
  images = [
    {
      imageUrl: 'assets/landing.jpg',
    },
    {
      imageUrl: 'assets/landing1.jpg',
    },
  ];
  currentIndex = 0;
  prevSlide() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  // end landing

  products: any[] = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 20,
      imageUrl: 'https://fakeimg.pl/40x40/',
      status: 'success',
    },
    {
      id: 2,
      name: 'Jeans',
      price: 50,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'warn',
    },
    {
      id: 3,
      name: 'Sneakers',
      price: 75,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'danger',
    },
    {
      id: 4,
      name: 'Jacket',
      price: 120,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'info',
    },
    {
      id: 5,
      name: 'Jackett',
      price: 120,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'info',
    },
    {
      id: 6,
      name: 'Jackettt',
      price: 120,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'info',
    },
    {
      id: 7,
      name: 'Jackettt',
      price: 120,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'info',
    },
    {
      id: 8,
      name: 'Jackettt',
      price: 120,
      imageUrl: 'https://fakeimg.pl/50x50/',
      status: 'info',
    },
  ];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  numOfVisiable: number = 3.5;

  viewProduct(productId: number) {
    this.trackingService.trackEvent(productId, 'view');
  }

  addToCart(productId: number) {
    this.trackingService.trackEvent(productId, 'add_to_cart');
  }

  addToWishlist(productId: number) {
    this.trackingService.trackEvent(productId, 'add_to_wishlist');
  }
}
