import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isVisibleCurrent = true;
  public isVisibleForecast = false;

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
}
