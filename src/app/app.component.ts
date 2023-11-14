import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private weatherService: WeatherService){

  }
  ngOnInit(): void {
    this.weatherService.getWeatherData('New delhi').subscribe({
      next:(response) => {
        console.log(response);
      }
    })
  }
  
}
