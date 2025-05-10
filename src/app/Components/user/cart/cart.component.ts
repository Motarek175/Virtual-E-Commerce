import { Component } from '@angular/core';
import { TrackingService } from '../../../Core/services/tracking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private trackingService: TrackingService) {}
  removeFromCart(productId: number) {
    this.trackingService.trackEvent(productId, 'remove_from_cart');
  }
}
