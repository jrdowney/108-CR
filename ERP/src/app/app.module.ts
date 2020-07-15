import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TempConverterComponent } from './component/temp-converter/temp-converter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavBarComponent,
    MainPageComponent,
    UserRegisterComponent,
    UserListComponent,
    UserLoginComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
