import { Component } from '@angular/core';
import { Customer } from 'projects/common/src/lib/customer';
import { UserService } from 'projects/shop1/src/app/user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
