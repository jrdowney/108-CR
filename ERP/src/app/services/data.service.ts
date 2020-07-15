import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userList = [];

  constructor() {
    // creating hardedcoded admin user for testing
    let user = new User();
    user.firstName = "Jonathan";
    user.lastName = "Downey"
    user.userName = "Admin";
    user.password = "1111";
    this.userList.push(user);
  }


  public saveUser(user){
    this.userList.push(user);
  }



  public getAllUsers() {
    return this.userList;
  }

  public removeItem(index) {
    // remove from the array
  }
}

