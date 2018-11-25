import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.css']
})
export class Blog2Component implements OnInit {
  showmore = false;
  showbutton = true;
  constructor() { }

  ngOnInit() {
  }
  

  showMore(){
    this.showmore = true;
    this.showbutton = false;
  }
  
}
