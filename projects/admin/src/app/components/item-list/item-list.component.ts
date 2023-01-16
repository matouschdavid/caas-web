import { Component, Input } from '@angular/core';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items: any[] = [];
  @Input()
  emptyItem!: () => any;

  @Input()
  title!: (item: any) => string;
  @Input()
  body!: (item: any) => string[];
  @Input()
  footer!: (item: any) => string;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }
}
