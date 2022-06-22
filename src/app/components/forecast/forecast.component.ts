import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() weeks: any;
  @Output() selectEvent = new EventEmitter<string>();
  selDay!: string;
  @Input() hightlighted!:number;

  constructor() {
    // console.log(this.hightlighted);
  }

  ngOnInit(): void {
    // console.log(this.hightlighted);
  }

  sendSelDay(day: any){
    this.selDay = day.dt_txt;
    // this.hightlighted = 2;
    // console.log(this.hightlighted);
    this.selectEvent.emit(this.selDay);
  }
}
