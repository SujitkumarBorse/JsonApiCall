import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ImageGallary } from './image-gallary.model';




@Injectable({
  providedIn: 'root'
})
export class CountriesService  {

  
  // url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  url : string = "../assets/CountryData.json"

  constructor(private http:HttpClient) {

  }
  allCountries(): Observable<any>{
    return this.http.get(this.url);
  }

}
