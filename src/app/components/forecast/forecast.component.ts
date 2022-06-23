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
  @Input() hightlighted:number=1;

  constructor() {
  }

  ngOnInit(): void { }

  sendSelDay(day: any){
    this.selDay = day.dt_txt;
    this.selectEvent.emit(this.selDay);
  }
}
