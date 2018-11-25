import { Component } from '@angular/core';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthService } from './auth.service';
import { RouterModule, Router } from '@angular/router';
import { UserService } from './user.service';
import  '../styles.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'realtime';
  thankmessage = false;
  sendContact = {
    email:"",
    phone:"",
    message:""
  }
  
  
   

  constructor(private dialog: MatDialog, private authService: AuthService,
                      private router: Router,public user: UserService) {
                  
                      }


  showmessage(){
    this.thankmessage = true;
  }

  openLoginDialog() {
    if (!this.authService.loggedIn()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.panelClass = 'dialog-panel';
      this.dialog.closeAll();
      this.dialog.open(LoginDialogComponent, dialogConfig);
    } else {
      this.dialog.closeAll();
      this.router.navigate(['/profile']);
    }

  }

  openProductDialog() {
    if (!this.authService.loggedIn()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.panelClass = 'dialog-panel';
      this.dialog.closeAll();
      this.dialog.open(ProductDialogComponent, dialogConfig);
    } else {
      this.dialog.closeAll();
      this.router.navigate(['/products']);
    }

  }


  sendContactForm(){
    this.authService.sendContact(this.sendContact)
    .subscribe(
      res => console.log(res)
    ),
    err => console.log(err)
  }




}
