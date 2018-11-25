import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AuthService } from '../auth.service';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import  '../../styles.css';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService,
    private router: Router,public user: UserService) {}

  ngOnInit() {
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



scroll(){
  window.scroll(0, 0);
}






}
