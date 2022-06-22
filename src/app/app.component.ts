import { Component } from '@angular/core';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isVisibleCurrent = true;
  public isVisibleForecast = false;
  cityName: string = 'Minsk, Belarus';
  today: any;
  weeks: any;

  constructor(private weatherService: WeatherService) {
    this.getInputValue();
    // console.log('app-constructor - '+ this.city);
    // this.getDataToday();
    // this.getData5Days();
}

  btnClickToday(){
    console.log("button click today");
    this.isVisibleCurrent = true;
    this.isVisibleForecast = false;
  }
  btnClickFiveDay(){
    console.log("button click five day");
    this.isVisibleCurrent = false;
    this.isVisibleForecast = true;
  }
  getInputValue():string{
    console.log(this.cityName);
    this.getDataCurrent();
    this.getDataForecast();

    return this.cityName;
  }

  getDataCurrent():void {
    this.weatherService.getWeatherForCurrentDay(this.cityName).subscribe((data: any) => {
        this.today = data;
        console.log(this.today);
    })
}

getDataForecast():void {
    this.weatherService.getWeatherFor5Days(this.cityName).subscribe((data: any) => {
        this.weeks = data.list;
        console.log(this.weeks);
    })
}
}
