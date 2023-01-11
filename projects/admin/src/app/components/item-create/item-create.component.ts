import { Component, Input } from '@angular/core';
import { Listable } from 'projects/common/src/lib/listable';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent {
  @Input() item: any | null = null;
  itemFields: any[] = [];

  ngOnInit() {
    this.itemFields = this.getItemFields();
  }

  getItemFields(): any[] {
    if (this.item == null) return [];
    const result = Object.getOwnPropertyNames(this.item)
      .filter((key) => this.item[key] != null)
      .map<any>((key) => {
        return {
          name: key,
          value: this.item[key],
        };
      });
    return result;
  }
  submitForm() {
    console.log('Submit form', this.itemFields);
  }
}
