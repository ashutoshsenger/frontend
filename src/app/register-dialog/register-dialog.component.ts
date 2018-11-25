import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialogModule, MatDialogRef, MatDialog, MatDialogContent, MatDialogActions, MatDialogConfig } from '@angular/material';
import { FormBuilder, FormGroup,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import * as jwt_decode from "jwt-decode";
import { passValidator } from './validator';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  id = ""
  registerUserData= {}

   form: FormGroup;
    
  errormessage = ""



  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<RegisterDialogComponent>,
    public _auth: AuthService, private _router: Router,private fb: FormBuilder) {


      this.form = this.fb.group({

       name:['', Validators.minLength(4)],
       phone:"",
       email:"",
       password:"",
       conformpassword:['',passValidator]

      });
 

       this.form.controls.password.valueChanges
       .subscribe(
         x => this.form.controls.conformpassword.updateValueAndValidity()
       )
 


     }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.form.value);
     this.form.markAsTouched();
     if (this.form.valid) {
      this.sendMail();
      this.registerUser();
    } else {
      this.errormessage = "All fields are mandatory !!"
    }
     
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
    this._auth.registerUser(this.form.value)
    .subscribe(
      res => {
        this.dialogRef.close();
        localStorage.setItem('token', res.token);
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
        console.log(res.token);
        console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    )      
  }


 
  sendMail(){
    this._auth.sendMail(this.form.value)
    .subscribe(
      res => console.log(res)
    ),
    err => console.log(err)
  }



  openLoginDialog() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(LoginDialogComponent, dialogConfig);
  }






}
