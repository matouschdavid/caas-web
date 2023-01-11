import { Component, Input } from '@angular/core';
import { Listable } from 'projects/common/src/lib/listable';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css'],
})
export class ItemListItemComponent {
  @Input() item: Listable | null = null;
}
