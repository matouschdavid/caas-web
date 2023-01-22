import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  private returnTo: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => (this.returnTo = params['returnUrl'])
    );
  }

  login() {
    if (this.authService.login()) {
      this.router.navigateByUrl(this.returnTo);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
