import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  @Input() today: any;
  
  dayName: any;

  constructor() { }

  ngOnInit(): void {
    let pipe = new DatePipe('en-US');
    this.dayName = pipe.transform(new Date(), 'dd.MM.YYYY');
  }

  durationDay(value_sunset:number, value_sunrise:number):string{
    let miliseconds:number = value_sunset - value_sunrise;
    let hour:any = Math.round(miliseconds / 60 / 60) % 24;
    hour = hour > 0 ? hour-1: hour;
    let min:any = Math.round(miliseconds / 60 % 60);

    min = min < 10 ? '0' + min : min;
    hour = hour < 10 ? '0' + hour : hour;

    return (hour+':'+min+' '+'hr');
}
}
