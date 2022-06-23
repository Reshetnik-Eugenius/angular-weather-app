import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherService } from './shared/service/weather.service';
import {MatDialog} from "@angular/material/dialog";
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe]
})
export class AppComponent {
  public isVisibleCurrent = true;
  public isVisibleForecast = false;
  cityName: string = 'Minsk, Belarus';
  today: any;
  weeks: any;
  hours: any;
  day: any;
  hightlighted!:number;
  error: any;

  constructor(private weatherService: WeatherService,
              private datePipe: DatePipe,
              private dialog: MatDialog) {
    this.getInputValue();
}

  btnClickToday(){
    this.isVisibleCurrent = true;
    this.isVisibleForecast = false;

    let pipe = new DatePipe('en-US');
    this.day = pipe.transform(new Date(), 'YYYY-MM-dd');

    this.getDataForecast();
  }

  btnClickFiveDay(){
    this.isVisibleCurrent = false;
    this.isVisibleForecast = true;
  }

  getInputValue():string{
    this.getDataCurrent();
    this.getDataForecast();

    let pipe = new DatePipe('en-US');
    this.day = pipe.transform(new Date(), 'YYYY-MM-dd');

    return this.cityName;
  }
  unselDayForecast(){
    this.hightlighted = 1;
  }
  getDataCurrent():void {
    this.weatherService.getWeatherForCurrentDay(this.cityName).subscribe((data: any) => {
        this.today = data;
    })
}

getDataForecast():void {
  this.weatherService.getWeatherFor5Days(this.cityName).subscribe(
    (data: any) => {
      this.weeks = data.list.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes('15:00:00'));
      this.hours = data.list;
      this.hours = data.list.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes(this.day.slice(0,10)))
    }),
    (err: any) => {
      this.error = err;
      // console.log(err);
    
      this.dialog.open(ErrorModalComponent, {
        width: '30%',
        data: this.error
      });
    }
}
receiveSelDay($event: any) {
  this.day = $event;
  this.getDataForecast();
}

}

