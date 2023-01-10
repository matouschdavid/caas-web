import { Shop } from './shop';

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public creditCardNumber: string,
    public creditCardExpiration: string,
    public creditCardCVC: number,
    public shopId: number | null = null,
    public shop: Shop | null = null
  ) {}
}
