import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  myApiKey: string = 'a73b0fb9f8c1493788e121749230308';
  constructor(private http: HttpClient) {}

  // getWeather(location: string) {
  getWeather(location: string) {


    return this.http.get(
      'http://api.weatherapi.com/v1/current.json?key=' +
        this.myApiKey +
        '&q=' +
        location +
        '&aqi=no'
    );
  }
}
