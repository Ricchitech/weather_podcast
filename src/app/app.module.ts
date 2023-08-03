import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ApicallService } from './apicall.service';

@NgModule({
  declarations: [AppComponent, WeatherComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApicallService],
  bootstrap: [AppComponent],
})
export class AppModule {}
