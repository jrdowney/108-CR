import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  model = new User();
  retypePass = null;


  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  save() {
    console.log("saving new user", this.model);

    if (this.model.password !== this.retypePass) {
      alert("Passwords do not match, fix it!");
      return;  // finished with the save fn.
    }

    // save the user (model)
    this.dataSrv.saveUser(this.model);

    // show a success message



    // reset the form
    this.model = new User();
    this.retypePass = null;
  }

}
