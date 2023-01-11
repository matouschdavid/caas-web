import { Listable } from './listable';

export class Product implements Listable {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public link: string,
    public price: number,
    public isDeleted: boolean
  ) {}

  getTitleValue() {
    return this.name;
  }

  getContentValues() {
    return [this.description, this.price];
  }

  getFooterValue() {
    return this.id;
  }
}
