import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() weeks: any;
  // weekDays: any;
  
  constructor() { 
    // this.weeks = this.weeks.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes('15:00:00'));
    // console.log("const");
  }

  ngOnInit(): void {
    
  }

}
