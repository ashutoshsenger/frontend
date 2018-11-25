import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  id = ""
  registerUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
        console.log(res.token);
        console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    )      
  }






}
