import { Component } from '@angular/core';
import { Customer } from 'projects/common/src/lib/customer';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  customer: Customer | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((customer) => {
      this.customer = customer;
    });
  }
}
