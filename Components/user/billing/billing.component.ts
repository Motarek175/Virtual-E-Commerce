import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export class BillingComponent {
  cash: BehaviorSubject<boolean> = new BehaviorSubject(false);
  bank: BehaviorSubject<boolean> = new BehaviorSubject(true);
  selectPayment(method: string) {
    if (method === 'cash') {
      this.cash.next(true);
      this.bank.next(false);
    } else {
      this.cash.next(false);
      this.bank.next(true);
    }
  }
}
