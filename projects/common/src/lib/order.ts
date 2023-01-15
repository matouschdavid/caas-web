import { Guid } from 'guid-typescript';
import { CollectionPosition } from './collection-position';
import { Customer } from './customer';

export class Order {
  constructor(
    public id: Guid,
    public orderDate: Date,
    public customer: Customer,
    public discount: number,
    public totalPrice: number,
    public positions: CollectionPosition[],
    public productCount: number
  ) {}
}
