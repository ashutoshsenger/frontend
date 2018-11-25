import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
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

