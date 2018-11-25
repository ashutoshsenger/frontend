import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialogModule, MatDialogRef, MatDialog, MatDialogContent, MatDialogActions, MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { NgModule } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  id = ""

  loginUserData = {}

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ProductDialogComponent>,
    private _router: Router,private _auth: AuthService) { }

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
      this.dialogRef.close();
      this._router.navigate(['/profile']);
    }, rej => {
      console.log(rej.message);
    });
  }

  tryFacebookLogin() {
    this._auth.doFacebookLogin()
    .then(res => {
      this.dialogRef.close();
      this._router.navigate(['/profile']);
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }



  tryTwitterLogin() {
    this._auth.doTwitterLogin()
    .then(res => {
      this.dialogRef.close();
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
        this.dialogRef.close();
        localStorage.setItem('token', res.token);
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
          console.log(res);
         console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    ) 
  }


  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(RegisterDialogComponent, dialogConfig);
  } 


  openRegisterDialog() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(RegisterDialogComponent, dialogConfig);
    
  } 














}
