import { AmountType } from './amout-type';

export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public amountType: AmountType
  ) {
    this.name = name;
    this.amount = amount;
    this.amountType = amountType;
  }
}
