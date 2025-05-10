export interface TrackingEvent {
  user_id: string;
  product_id: number;
  event_type:
    | 'view'
    | 'add_to_cart'
    | 'add_to_wishlist'
    | 'remove_from_cart'
    | 'remove_from_wishlist';
}
