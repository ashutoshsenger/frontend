import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//  private _registerUrl = "https://hidden-river-33306.herokuapp.com/api/register";
//  private _loginUrl = "https://hidden-river-33306.herokuapp.com/api/login";


  private _registerUrl = "https://hidden-river-33306.herokuapp.com/api/register";
  private _loginUrl = "https://hidden-river-33306.herokuapp.com/api/login";
  private savebasic = "https://hidden-river-33306.herokuapp.com/api/updateuser/basic";
  private savepersonal = "https://hidden-river-33306.herokuapp.com/api/updateuser/personal";
  private saveeducational = "https://hidden-river-33306.herokuapp.com/api/updateuser/educational";
  private saveprofessional = "https://hidden-river-33306.herokuapp.com/api/updateuser/professional";
  private saveinterest = "https://hidden-river-33306.herokuapp.com/api/updateuser/interest";
  private savelifestyle = "https://hidden-river-33306.herokuapp.com/api/updateuser/lifestyle";
  private formdetails = "https://hidden-river-33306.herokuapp.com/api/formdetails";
  private getfiles = "https://hidden-river-33306.herokuapp.com/api/getfiles";
  private mailUrl = "https://hidden-river-33306.herokuapp.com/api/sendMail";
  private sendContactUrl = "https://hidden-river-33306.herokuapp.com/api/sendContact";
 

 

  constructor(private http: HttpClient,
    private _router: Router,public afAuth: AngularFireAuth) { }

    doGoogleLogin() {
      return new Promise<any>((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          
          
          localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWJmMWI0NTY1NDQwMzMzMTczNzlkOGRmIiwiaWF0IjoxNTQyNjAyODU2fQ.p9YYiMzRYUnArg4QuBTw4ZheEDfrgGS9TAwxh35Fp9E');
        }, err => {
          console.log(err);
          reject(err);
        });
      });
    }
  
    doFacebookLogin() {
      return new Promise<any>((resolve, reject) => {
        const provider = new firebase.auth.FacebookAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        
         
          console.log(res.user.displayName);
          localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWJmMWI0NTY1NDQwMzMzMTczNzlkOGRmIiwiaWF0IjoxNTQyNjAyODU2fQ.p9YYiMzRYUnArg4QuBTw4ZheEDfrgGS9TAwxh35Fp9E');
        }, err => {
          console.log(err);
          reject(err);
        });
      });
   }


   doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        
        localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWJmMWI0NTY1NDQwMzMzMTczNzlkOGRmIiwiaWF0IjoxNTQyNjAyODU2fQ.p9YYiMzRYUnArg4QuBTw4ZheEDfrgGS9TAwxh35Fp9E');
      }, err => {
        console.log(err);
        reject(err);
      });
    });
 }



 sendMail(data) {
  return this.http.post<any>(this.mailUrl, data)
}

sendContact(data) {
  return this.http.post<any>(this.sendContactUrl, data)
}



   saveBasic(data) {
     return this.http.post<any>(this.savebasic, data)
   }

   savePersonal(data) {
    return this.http.post<any>(this.savepersonal, data)
  }

  saveEducational(data) {
    return this.http.post<any>(this.saveeducational, data)
  }

  saveProfessional(data) {
    return this.http.post<any>(this.saveprofessional, data)
  }

  saveInterest(data) {
    return this.http.post<any>(this.saveinterest, data)
  }

  saveLifestyle(data) {
    return this.http.post<any>(this.savelifestyle, data)
  }



  formDetails(data) {
    return this.http.post<any>(this.formdetails, data)
  }


  getFiles(data){
    return this.http.post<any>(this.getfiles, data)
  }


    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }


    registerUser(user) {
      return this.http.post<any>(this._registerUrl, user)
    }


    loggedIn(){
      return !!localStorage.getItem('token')
    }
  
      logoutUser(){
        this._router.navigate(['/homepage'])
        localStorage.removeItem('token');
        localStorage.removeItem('social-name');
        
        
      }





}
