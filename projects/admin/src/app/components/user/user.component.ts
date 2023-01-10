import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  customerId: number | null = null;
  customer: Customer | null = null;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCustomerIdUpdates().subscribe((customerId) => {
      this.customerId = customerId;
    });

    this.userService.getCurrentUser().subscribe((customer) => {
      this.customer = customer;
    });
  }

  isLoggedIn(): boolean {
    return this.customerId !== null;
  }

  logout(): void {
    this.userService.setCustomerId(null);
  }
}
