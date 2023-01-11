import { Component } from '@angular/core';
import { Customer } from 'projects/common/src/lib/customer';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css'],
})
export class CustomerPageComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      console.log(this.customers);
    });
  }

  getEmptyCustomer(): Customer {
    return new Customer(0, '', '', '', '', 0, null, null);
  }
}
