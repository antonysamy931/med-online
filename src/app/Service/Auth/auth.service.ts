import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn() {
    return localStorage.getItem('LoggedInUserData') ? true : false;
  }

  private GetUserData() : any {
    var UserData = localStorage.getItem('LoggedInUserData');
    return JSON.parse(UserData);
 }
}
