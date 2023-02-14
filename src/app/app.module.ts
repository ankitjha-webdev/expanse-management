import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpanceComponent } from './user/add-expance/add-expance.component';
import { UpdateExpanceComponent } from './user/update-expance/update-expance.component';
import { ListExpanceComponent } from './user/list-expance/list-expance.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './common/header/header.component';
import { UserExpenseComponent } from './user/user-expense/user-expense.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    AddExpanceComponent,
    UpdateExpanceComponent,
    ListExpanceComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserExpenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
