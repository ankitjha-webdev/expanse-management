import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExpanceComponent } from './user/list-expance/list-expance.component';
import { AddExpanceComponent } from './user/add-expance/add-expance.component';
import { UpdateExpanceComponent } from './user/update-expance/update-expance.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserExpenseComponent } from './user/user-expense/user-expense.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: UserExpenseComponent,  canActivate: [AuthGuard] },
  {path: 'add-expanse', component: AddExpanceComponent, canActivate: [AuthGuard]},
  {path: 'edit-expanse/:id', component: UpdateExpanceComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  // {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'list-expanse', component: ListExpanceComponent, canActivate: [AuthGuard]},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
