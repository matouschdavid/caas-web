import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css'],
})
export class ItemListItemComponent {
  @Input() item!: any;
  @Input()
  title!: (item: any) => string;
  @Input()
  body!: (item: any) => string[];
  @Input()
  footer!: (item: any) => string;
}
