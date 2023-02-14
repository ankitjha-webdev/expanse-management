import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user/user';
import { Auth } from '../model/auth/auth';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private baseUrl = environment.baseUrl;
  private userApiUrl = environment.userApiUrl;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userApiUrl}/all-user`);
  }

  // get user id from local storage
 

  login(user: Auth): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signin`, user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signup`, user);
  }

  logOut(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signout`, {});
  }

  // setToken and user details in local storage
  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  setUser(user: Auth): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): Auth {
    return JSON.parse(localStorage.getItem('user'));
  }
  getUserId(): number {
    return this.getUser().id;
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  deleteToken() {
    localStorage.removeItem('accessToken');
  }

}
