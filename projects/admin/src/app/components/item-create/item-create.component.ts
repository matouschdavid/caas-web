import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent {
  @Output()
  itemAdded: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  itemFunc!: () => any;

  item: any | null = null;

  itemFields: any[] = [];

  itemTitle: string = '';

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemTitle = this.router.url.substring(1, this.router.url.length - 1);
    this.itemTitle =
      this.itemTitle[0].toUpperCase() +
      this.itemTitle.substring(1, this.itemTitle.length);
    this.initForm();
  }

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
    this.item.id = this.item.id.toString();
    this.itemService.createItem(this.item).subscribe((res) => {
      this.initForm();
      this.itemAdded.emit(this.item);
    });
  }
}
