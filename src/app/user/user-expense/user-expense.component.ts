import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../service/expense.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-expense',
  templateUrl: './user-expense.component.html',
  styleUrls: ['./user-expense.component.css'],
})
export class UserExpenseComponent implements OnInit {
  id: number;
  data: any;
  user: any;
  totalExpenses: number = 0;
  totalExpendedAmountByAllUsers: any = 0;

  constructor(
    private _ExpenseService: ExpenseService,
    private _router: Router,
    private _user: UserService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user
      ? console.log('user is logged in')
      : this._router.navigate(['/login']);

    this.id = this._user.getUserId();
    this._ExpenseService.getExpenseByUserId(this.id).subscribe((res) => {
      this.data = res;
    });

    this._ExpenseService.totalExpenseByUserId(this.id).subscribe((res) => {
      if (res[0].total != null && res[0].total != '') {
        this.totalExpenses = res[0].total;
      } else {
        this.totalExpenses = 0;
      }
    });

    this._ExpenseService.totalExpendedAmountByAllUsers().subscribe((res) => {
      this.totalExpendedAmountByAllUsers = res[0].totalExpenses;
      if(res[0].totalExpenses != null && res[0].totalExpenses != ''){
        this.totalExpendedAmountByAllUsers = res[0].totalExpenses;
      }else{
        this.totalExpendedAmountByAllUsers = 0;
      }
    });
  }

  deleteExpense(id: number) {
    if (confirm('Are you sure to delete this expense?')) {
      this._ExpenseService.deleteExpense(id).subscribe((res) => {
        console.log('Expence deleted');
        this.data = this.data.filter((item) => item.id !== id);
        this._router.navigate(['/home']);
      });
    }
  }
}
