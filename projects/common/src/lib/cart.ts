import { CollectionPosition } from './collection-position';
import { Guid } from 'guid-typescript';

export class Cart {
  constructor(
    public id: Guid,
    public lastVisited: Date,
    public customer: any,
    public positions: CollectionPosition[],
    public totalPrice: number
  ) {}
}
