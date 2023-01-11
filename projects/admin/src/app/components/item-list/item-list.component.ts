import { Component, Input } from '@angular/core';
import { Listable } from 'projects/common/src/lib/listable';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() items: Listable[] = [];
  @Input() emptyItem: Listable | null = null;
}
