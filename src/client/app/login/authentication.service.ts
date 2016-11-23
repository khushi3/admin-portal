import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users:any = [
  new User('admin@admin.com','adm9'),
  new User('khushi@gmail.com','a23')
];

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user:any){
    var authenticatedUser = users.find((u:any) => u.email === user.email);
    if (authenticatedUser){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['Home']);      
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  } 
}