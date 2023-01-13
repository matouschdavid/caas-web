import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'projects/common/src/lib/base.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends BaseService {
  constructor(
    private authService: AuthService,
    http: HttpClient,
    private router: Router
  ) {
    super(http);
  }

  getControllerName(): string {
    return this.router.url.substring(1, this.router.url.length - 1);
  }

  getItems(): Observable<any[]> {
    return super.get<any[]>(
      `${this.getControllerName()}/all/${this.authService.appKey}`
    );
  }

  createItem(item: any): Observable<any> {
    return super.post(
      `${this.getControllerName()}/${this.authService.appKey}`,
      item
    );
  }

  deleteItem(id: string): Observable<any> {
    return super.delete(`${this.getControllerName()}/${id}`);
  }
}
