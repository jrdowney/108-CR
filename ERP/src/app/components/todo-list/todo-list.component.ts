import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoText = "";
  todoList = [];

  constructor() {


  }

  ngOnInit(): void {
  }

  saveTodo() {

    console.log(this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }

  todoClicked() {
    console.log("todo clicked");
  }

  deleteTodo() {
    this.todoList = [];
  }

}

// 1register the route (app.routing.module.ts)

// 2 create the html form
// 3 link the input to a variable on the ts
// 4 on click event of the add button
// 5  - add the text to an array
// 6 display the list of todos on the html using *ngFor
//
