import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Details';

  constructor(private myService: LogsService){}

  show:boolean=false;
  
  toggle() {
    this.show = !this.show;
    this.myService.add(this.show); 
}
 }
  
