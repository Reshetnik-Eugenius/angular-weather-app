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
  hours: any;

  constructor(private weatherService: WeatherService) {
    this.getInputValue();
}

  btnClickToday(){
    // console.log("button click today");
    this.isVisibleCurrent = true;
    this.isVisibleForecast = false;
  }
  btnClickFiveDay(){
    // console.log("button click five day");
    this.isVisibleCurrent = false;
    this.isVisibleForecast = true;
  }
  getInputValue():string{
    // console.log(this.cityName);
    this.getDataCurrent();
    this.getDataForecast();
    // this.getDataWeather();

    return this.cityName;
  }

  getDataCurrent():void {
    this.weatherService.getWeatherForCurrentDay(this.cityName).subscribe((data: any) => {
        this.today = data;
        // console.log(this.today);
    })
}

getDataForecast():void {
    this.weatherService.getWeatherFor5Days(this.cityName).subscribe((data: any) => {
        // this.weeks = data.list;
        this.weeks = data.list.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes('15:00:00'));
        this.hours = data.list;
        // console.log('this.hours - getDataForecast');
        this.hours = data.list.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes(this.hours[0].dt_txt.slice(0,10)));
        // console.log(this.weeks);
        // this.weeks = data.list.filter((elem: { dt_txt: string | any[]; }) => elem.dt_txt.includes('15:00:00'));
        // console.log(this.weeks);
    })
}

}

