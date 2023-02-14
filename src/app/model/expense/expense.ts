export class Expense {
  name: string;
  amount: number;
  date: Date;
  description: string;
  user_id: number;
  constructor(
    name: string,
    amount: number,
    date: Date,
    description: string,
    user_id: number
  ) {
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.user_id = user_id;
  }
}
