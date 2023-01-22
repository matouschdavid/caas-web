import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  customerId: number | null = null;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.login(this.customerId ?? -1).subscribe((customer) => {
      if (customer) {
        this.userService.setCustomerId(customer.id);
        this.router.navigateByUrl('/home');
      } else {
        alert('Invalid customer id');
      }
    });
  }
}
