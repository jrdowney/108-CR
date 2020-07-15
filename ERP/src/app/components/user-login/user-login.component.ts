import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userName = "";
  password = "";

  showError = false;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let allUsers = this.data.getAllUsers();
    let found = false;

    for (let i=0; i< allUsers.length; i++){ //travel the array of users

      let user = allUsers[i];
      if(user.userName.toLowerCase() == this.userName.toLowerCase() && user.password == this.password){
        console.log("You are now logged in");
        found = true;
        this.showError = false;  // hide error

        // send user to another page
        this.router.navigate(['todoList']);
      }
    }

    if(!found){
      console.log("Error: Invalid credentials!");
      this.showError = true;
    }

  }


  // create 2vars
  // link inputs with the var ngModel
  // create a login function
  // link the click on the button to the login function
  // console log the user and password

  /**
   * inject the data service
   * on login:
   * - get the list of all users
   * - compare userName and password against all users
   */
}
