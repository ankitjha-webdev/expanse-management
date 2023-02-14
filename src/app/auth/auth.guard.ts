import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private UserService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (this.UserService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      // this.UserService.deleteToken();
      return false;
    }
  }
}
