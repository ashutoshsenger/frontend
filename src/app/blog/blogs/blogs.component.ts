import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
showmore = false;
showbutton = true;
  constructor( private router: Router) { 
       
       console.log(this.router.url);
  }

  ngOnInit() {
  }

showMore(){
  this.showmore = true;
  this.showbutton = false;
}

}

