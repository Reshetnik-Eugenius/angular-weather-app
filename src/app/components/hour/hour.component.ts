import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit {

  @Input() hours: any;
  @Input() day: any;
  
  ngOnInit(): void {}

  getWeekDay(dateMS: any){
    let date = new Date(dateMS);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }
}
