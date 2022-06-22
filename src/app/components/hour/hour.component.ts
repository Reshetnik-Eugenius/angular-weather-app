import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent implements OnInit {

  @Input() hours: any;
  
  
  // constructor() { console.log(this.hours[0].dt_txt.slice(0,10));}

  ngOnInit(): void {
    // this.hours = this.hours.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes(this.hours[0].dt_txt.slice(0,10)));
  }

}
