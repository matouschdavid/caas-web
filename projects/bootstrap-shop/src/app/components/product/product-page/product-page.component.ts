import { Component } from '@angular/core';
import { SearchService } from '../../../search.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  constructor(private searchService: SearchService) {}

  onSearch(searchTerm: string) {
    this.searchService.setSearchTerm(searchTerm);
  }
}
