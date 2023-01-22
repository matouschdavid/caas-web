import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'projects/common/src/lib/customer';
import { SignUpFormErrorMessages } from 'projects/common/src/lib/form-error-messages';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  @ViewChild('signUpForm', { static: true }) signUpForm!: NgForm;
  customer: Customer = {} as Customer;
  errors: { [key: string]: string } = {};

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm.statusChanges?.subscribe(() => {
      this.updateErrorMessages();
    });
  }

  updateErrorMessages(): void {
    this.errors = {};
    for (const message of SignUpFormErrorMessages) {
      const control = this.signUpForm.form.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.errors &&
        control.errors[message.forValidator] &&
        (control.touched || control.dirty)
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  signUp(): void {
    this.userService.signUp(this.customer).subscribe((customer) => {
      alert(`Sign up successful. Log in with the id: ${customer.id}.`);
      this.userService.setCustomerId(customer.id);
      this.customer = {} as Customer;
      this.signUpForm.resetForm();
      this.router.navigate(['/']);
    });
  }
}
