import { Component, OnInit } from '@angular/core';
import { CountriesService  } from './countriesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _country: CountriesService ) { }

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  ngOnInit() {
 this.getCountries();
  }
 
  getCountries(){
    this._country.allCountries().
    subscribe(
      data => {
        this.countryInfo=data.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    // console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
    
}