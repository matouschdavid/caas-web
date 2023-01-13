import { Component } from '@angular/core';
import { Customer } from 'projects/common/src/lib/customer';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent {
  getEmpty(): Customer {
    return new Customer(0, '', '', '', '', 0, null, null);
  }

  getTitleValue(customer: Customer): string {
    return customer.name;
  }

  getContentValues(customer: Customer): string[] {
    return [
      customer.email,
      customer.creditCardNumber,
      customer.creditCardExpiration,
    ];
  }

  getFooterValue(customer: Customer): string {
    return `Id: ${customer.id}`;
  }
}
