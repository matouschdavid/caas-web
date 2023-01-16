import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent {
  @Input()
  itemFunc!: () => any;

  item: any | null = null;

  itemFields: any[] = [];

  constructor(private router: Router, private itemService: ItemService) {}

  initForm() {
    this.item = this.itemFunc();
    this.itemFields = this.getItemFields();
  }

  getItemFields(): any[] {
    if (this.item == null) return [];
    const result = Object.getOwnPropertyNames(this.item)
      .filter((key) => this.item[key] != null)
      .filter((key) => key !== 'id')
      .map<any>((key) => {
        return {
          name: key[0].toUpperCase() + key.substring(1, key.length),
          value: this.item[key],
        };
      });
    return result;
  }

  submitForm() {
    this.itemFields.forEach((val) => {
      this.item[val.name.toLowerCase()] = val.value;
    }, {});
    this.item.id = Guid.create().toString();
    this.itemService.createItem(this.item).subscribe((res) => {
      this.router.navigate([this.router.url]);
    });
  }
}
