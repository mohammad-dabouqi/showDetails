import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { myService: LogsService}
  buttonName:any = 'Show Details';
  toggles=[""];
  Time=[""];
  myDate=new Date();
  add(show:boolean){
    if(show)  
     this.buttonName = "Hide details";
    else
      this.buttonName = "Show details";

      this.toggles.push("toggled on : ");
      this.Time.push(""+this.myDate);
  }
  
}
