import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private returnTo: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => (this.returnTo = params['returnUrl'])
    );
  }

  signIn() {
    if (this.auth.login()) {
      this.router.navigateByUrl(this.returnTo);
    } else {
    }
  }
}
