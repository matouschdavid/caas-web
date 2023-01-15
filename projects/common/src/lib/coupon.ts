import { Guid } from 'guid-typescript';
import { Shop } from './shop';

export class Coupon {
  constructor(
    public id: Guid,
    public code: string,
    public amount: number,
    public isValid: boolean,
    public shop: Shop | null = null
  ) {}
}
