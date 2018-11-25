import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFireModule } from 'angularfire2';
import { initializeApp } from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SocialLoginModule, FacebookLoginProvider, GoogleLoginProvider, AuthServiceConfig, LinkedinLoginProvider } from 'ng4-social-login';
import { RegistrationComponent } from './registration/registration.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';

 const config = new AuthServiceConfig([  
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider("81oekd476atocy")
  }

 ],false);

 export function provideConfig(){
   return config;
 }






  export const firebaseConfig = {
    apiKey: "AIzaSyCe5l2cKBNnHMiEQfeWw_e4RVrn1Wqxnjs",
    authDomain: "careerauth.firebaseapp.com",
    databaseURL: "https://careerauth.firebaseio.com",
    projectId: "careerauth",
    storageBucket: "",
    messagingSenderId: "866897014050"
  };
 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    BlogComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ThankyouComponent,
    HomesearchComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    RegistrationComponent,
    BlogsComponent,
    AboutComponent,
    ProductDialogComponent,
    Blog1Component,
    Blog2Component
  ],
  
    entryComponents: [
        LoginDialogComponent,
        RegisterDialogComponent,
        ProductDialogComponent
    ],
 



  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SocialLoginModule,
    FileUploadModule
  ],
  providers: [AuthService,AuthGuard,{provide: AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
