import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  customerId: number | null = null;

  constructor(private userService: UserService, private router: Router) {}

  login(): void {
    this.userService.setCustomerId(this.customerId ?? -1);
    this.router.navigateByUrl('/home');
  }
}
