import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  setSearchTerm(searchTerm: string) {
    this.searchTerm.next(searchTerm);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }
}
