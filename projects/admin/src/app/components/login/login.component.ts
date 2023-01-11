import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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

  login() {
    if (this.auth.login()) {
      this.router.navigateByUrl(this.returnTo);
    } else {
      // TODO error message
    }
  }
}
