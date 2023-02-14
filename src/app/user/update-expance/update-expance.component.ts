import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../service/expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-expance',
  templateUrl: './update-expance.component.html',
  styleUrls: ['./update-expance.component.css'],
})

export class UpdateExpanceComponent implements OnInit {
  expenceImg: string = 'assets/images/diary_re_4jpc.svg';
  user: any;
  id: number;
  expanse: any;
  form: any;
  submitted = false;

  constructor(
    private _expanse: ExpenseService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params['id'];
    this.getExpenseById();
    this.form = new FormBuilder().group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })    
  }

  getExpenseById() {
    this._expanse.getExpenseById(this.id).subscribe((res) => {
      this.expanse = res;
      console.log(this.expanse);
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  editExpense() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this._expanse.updateExpense(this.id, this.form.value).subscribe((res)=>{
      console.log(res + " updated");
      this._router.navigate(['/home']);
    })
  }

}
