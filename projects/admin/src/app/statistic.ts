export class Statistic {
  constructor(
    public title: string,
    public shopId: number,
    public from: Date,
    public to: Date,
    public value: any
  ) {}
}
