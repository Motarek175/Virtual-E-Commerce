import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { TrackingEvent } from '../interfaces/tracking';
@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private apiUrl = 'api/track';

  constructor(
    private http: HttpClient,
    private UserAuthService: UserAuthService
  ) {}

  trackEvent(productId: number, eventType: TrackingEvent['event_type']) {
    const event: TrackingEvent = {
      user_id: this.UserAuthService.userId,
      product_id: productId,
      event_type: eventType,
    };
    console.log('Tracking event:', JSON.stringify(event));
  }
}
