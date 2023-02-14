import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Expense } from '../../model/expense/expense';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-list-expance',
  templateUrl: './list-expance.component.html',
  styleUrls: ['./list-expance.component.css']
})
export class ListExpanceComponent implements OnInit {
  user: any;
  expenses: Expense[] = [];
  id: number;
  totalExpenses: number = 0;
  constructor(private UserService:UserService, private ExpenseService:ExpenseService) { }

  ngOnInit(): void {
    this.user=this.UserService.getUser();
    console.log(this.user);
    this.id=this.UserService.getUserId();
    this.getExpenses();
    this.totalExpense();
  }

  getExpenses(){
    this.ExpenseService.getExpenses().subscribe((res)=>{
      this.expenses=res;
      console.log(this.expenses);
    })
  }

  deleteExpense(id){
    if(confirm("Are you sure to delete this expense?")){
      this.ExpenseService.deleteExpense(id).subscribe((res)=>{
        console.log(res + " deleted");
        
        this.getExpenses();
      })
    }
  }

totalExpense(){
  this.ExpenseService.totalExpendedAmountByAllUsers().subscribe((res) => {
    this.totalExpenses = res[0].totalExpenses;
    console.log(res[0].totalExpenses);
  }); 
}

}
