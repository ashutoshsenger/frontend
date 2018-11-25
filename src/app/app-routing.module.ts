import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { AboutComponent } from './about/about.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  { path: 'blogs', component: BlogComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '', component: HomepageComponent, },
  { path: 'registration', component: RegistrationComponent },
  { path: 'blogs/Top-10-Simple-Ways-How-Not-Stress-Exam-Overcome-Anxiety', component: Blog1Component },
  { path: 'blogs/Why-Career-Counselling-India-More-Valuable-Now-Ever-Before?', component: Blog2Component },
  { path: 'about', component:AboutComponent },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
