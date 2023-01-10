import { Component } from '@angular/core';
import { Customer } from 'projects/common/src/lib/customer';
import { UserService } from 'projects/common/src/lib/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  customerName: string = '';
  customerEmail: string = '';
  customerCardNumber: string = '';
  customerCardExpiration: string = '';
  customerCardCVC: number = 0;

  constructor(private userService: UserService) {}
  signUp(): void {
    const customer: Customer = new Customer(
      -1,
      this.customerName,
      this.customerEmail,
      this.customerCardNumber,
      this.customerCardExpiration,
      this.customerCardCVC
    );
    this.userService.signUp(customer).subscribe((customer) => {
      this.userService.setCustomerId(customer.id);
    });
  }
}
