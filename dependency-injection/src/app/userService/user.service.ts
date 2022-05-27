import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  setUser(newUser: any) {
    this.user = newUser;
  }

  getUser(){
    return this.user;
  }

  constructor() { }
}
