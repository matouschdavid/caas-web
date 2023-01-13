import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
})
export class ItemCreateComponent {
  @Input() item: any | null = null;
  itemFields: any[] = [];

  constructor(private router: Router, private itemService: ItemService) {}

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
    this.itemFields.forEach((val) => {
      this.item[val.name] = val.value;
    }, {});
    console.log(this.item);
    this.itemService.createItem(this.item).subscribe((res) => {
      this.router.navigate([this.router.url]);
    });
  }
}
