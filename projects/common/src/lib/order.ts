import { Guid } from 'guid-typescript';
import { CollectionPosition } from './collection-position';
import { Customer } from './customer';
import { Listable } from './listable';

export class Order implements Listable {
  constructor(
    public id: Guid,
    public orderDate: Date,
    public customer: Customer,
    public discount: number,
    public totalPrice: number,
    public positions: CollectionPosition[],
    public productCount: number
  ) {}

  getTitleValue() {
    return `Order from ${this.orderDate.toLocaleDateString()}}`;
  }

  getContentValues() {
    return [this.customer.name, this.productCount, this.totalPrice];
  }

  getFooterValue() {
    return this.id;
  }
}
