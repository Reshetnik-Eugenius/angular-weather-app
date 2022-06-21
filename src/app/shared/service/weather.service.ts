import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherCurrent } from '../model/weather-current.model';
import { IWeather5day } from '../model/weather-5day.model';
import { Observable } from 'rxjs';

const API_URL = 'https://api.openweathermap.org';
const API_KEY = '97a083fed1175fa2599afa67b96865b3';

@Injectable({
    providedIn: 'root'
})

export class WeatherService {

    constructor(private http: HttpClient) { }

    getWeatherForCurrentDay(city: string): Observable<IWeatherCurrent> {
        return this.http.get<IWeatherCurrent>(`${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`);
    }

    getWeatherFor5Days(city: string): Observable<IWeather5day> {
        return this.http.get<IWeather5day>(`${API_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=ru&units=metric`);
    }
}
