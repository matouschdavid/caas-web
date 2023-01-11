import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  appKey: string | null = null;
  constructor(private oauthService: OAuthService) {}

  login(): boolean {
    this.oauthService.initCodeFlow();
    return true;
  }

  logout() {
    this.oauthService.logOut();
    this.appKey = null;
  }

  isLoggedIn() {
    const hasId =
      this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken();
    if (hasId && !this.appKey) {
      this.appKey = this.oauthService.getIdentityClaims()['sub'];
    }
    return hasId;
  }
}
