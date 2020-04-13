import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  private url = 'http://localhost:3000/user';

  constructor(
    private http : HttpClient,
    private router : Router
    ) { }
  register(data) {
   return this.http.post(this.url + '/signup', data);
  }
  login(data) {
    return this.http.post(this.url + '/login', data);
  }
  forgetpass(data) {
    return this.http.post(this.url + '/forgetpassword', data) ;
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }

}
