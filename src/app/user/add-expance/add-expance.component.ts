import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../service/expense.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Expense } from '../../model/expense/expense';
@Component({
  selector: 'app-add-expance',
  templateUrl: './add-expance.component.html',
  styleUrls: ['./add-expance.component.css'],
})
export class AddExpanceComponent implements OnInit {
  expenceImg: string = 'assets/images/diary_re_4jpc.svg';
  form: FormGroup;
  submitted: boolean = false;
  userId: number;
  constructor(
    private ExpenseService: ExpenseService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.UserService.getUser().id;
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  addExpanse(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const data: Expense = {
      name: this.form.value.name,
      amount: this.form.value.amount,
      date: this.form.value.date,
      description: this.form.value.description,
      user_id: this.userId,
    };
    console.log(JSON.stringify(data, null, 2));
    this.ExpenseService.createExpense(data).subscribe((res) => {
      res ? this._router.navigate(['/home']) : console.log('error');
    });
  }
}
