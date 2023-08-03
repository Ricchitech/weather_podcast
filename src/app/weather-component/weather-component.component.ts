import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApicallService } from '../apicall.service';
@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss'],
})
export class WeatherComponentComponent implements OnInit {
  public weatherSearchForm: any;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apicallService: ApicallService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  checkWeather(formValues: { location: any }) {
    this.apicallService.getWeather(formValues.location).subscribe((data) => {
      this.weatherData = data;
      console.warn(this.weatherData);
    });
  }
}
