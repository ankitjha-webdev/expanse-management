import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token: boolean;
  deleteToken: any;
 
  constructor(private UserService: UserService, private _router:Router) {}

  ngOnInit(): void {
    this.loggedIn();
    
  }

  loggedIn() {
    this.token = this.UserService.isLoggedIn();
  }

  logout() {
    if(this.UserService.isLoggedIn()){
      this.deleteToken= this.UserService.deleteToken();
      console.log(this.deleteToken);
      // navigate to login page
      this._router.navigate(['/login']);
    }

    // this.UserService.logOut().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
