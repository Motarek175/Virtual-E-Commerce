import { Component } from '@angular/core';
import { TrackingService } from '../../../Core/services/tracking.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(private trackingService: TrackingService) {}
  removeFromWishlist(productId: number) {
    this.trackingService.trackEvent(productId, 'remove_from_wishlist');
  }
}
