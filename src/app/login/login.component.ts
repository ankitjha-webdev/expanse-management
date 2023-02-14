import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // email: string = '';
  // password: string = '';
  form: FormGroup;
  submitted = false;

  constructor(
    private UserService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _loader: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
      // is user already logged in
    if (this.UserService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }

    
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this._loader.start();

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.UserService.login(this.form.value).subscribe((res) => {
      sessionStorage.setItem('accessToken', res.accessToken);
      if (res.accessToken) {
        this.UserService.setToken(res.accessToken);
        this.UserService.setUser(res);
        this.router.navigateByUrl('/home');
        this._loader.stop();
      }

    });
    
  }
}
