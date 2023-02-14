import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense/expense'; 
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = environment.baseUrl;
  // private expenseApiUrl = environment.expenseApiUrl;
  constructor(private http:HttpClient) { }

  getExpenses():Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.baseUrl}/expenses/`);
  }

  
  getExpense(id:number):Observable<Expense>{
    return this.http.get<Expense>(`${this.baseUrl}/expenses/${id}`);
  }

  getExpenseById(id:number):Observable<Expense>{
    return this.http.get<Expense>(`${this.baseUrl}/expenses/${id}`);
  }

  createExpense(expense:Expense):Observable<Expense>{
    return this.http.post<Expense>(`${this.baseUrl}/expenses/`, expense);
  }

  updateExpense(id:number, expense:Expense):Observable<Expense>{
    return this.http.put<Expense>(`${this.baseUrl}/expenses/${id}`,expense);
  }

  deleteExpense(id:number):Observable<Expense>{
    return this.http.delete<Expense>(`${this.baseUrl}/expenses/${id}`);
  }


  getExpenseByUserId(id:number):Observable<Expense[]>{ 
    return this.http.get<Expense[]>(`${this.baseUrl}/expenses/user/${id}`);
  }

  totalExpenseByUserId(id:number):Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/expenses/total-expended/${id}`);
  }

  totalExpendedAmountByAllUsers():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/expenses/total-amount`);
  }
}
