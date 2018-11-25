import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import * as jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  id = ""
  loginUserData = {}

  constructor(private _router: Router,private _auth: AuthService) { }

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



  tryGoogleLogin() {
    this._auth.doGoogleLogin()
    .then(res => {
      this._router.navigate(['/profile']);
      localStorage.setItem('social-name',res.user.displayName);
    }, rej => {
      console.log(rej.message);
    });
  }

  tryFacebookLogin() {
    this._auth.doFacebookLogin()
    .then(res => {
      this._router.navigate(['/profile']);
      localStorage.setItem('social-name',res.user.displayName);
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }


  tryTwitterLogin() {
    this._auth.doTwitterLogin()
    .then(res => {
      localStorage.setItem('social-name',res.user.displayName);
    
      this._router.navigate(['/profile']);
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }
  









  
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
    
        localStorage.setItem('token', res.token)
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
        console.log(res.token);
        console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    ) 
  }









}
