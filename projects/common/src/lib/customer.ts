import { Listable } from './listable';
import { Shop } from './shop';

export class Customer implements Listable {
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

  getTitleValue() {
    return this.name;
  }

  getContentValues() {
    return [this.email, this.creditCardNumber, this.creditCardExpiration];
  }

  getFooterValue() {
    return this.id;
  }
}
