import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Details';

  show:boolean=false;
  buttonName:any = 'Show Details';
  toggles=[""];

  myDate=new Date();
  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide details";
    else
      this.buttonName = "Show details";

      this.toggles.push("toggled on : "+ this.myDate);
}
 }
  
