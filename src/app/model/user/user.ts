export class User {
  id: number;
  name: string;
  amount: number;
  date: string;
  description: string;
  spender: string;
  constructor(
    id: number,
    name: string,
    amount: number,
    date: string,
    description: string,
    spender: string
  ) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.spender = spender;
  }
}
