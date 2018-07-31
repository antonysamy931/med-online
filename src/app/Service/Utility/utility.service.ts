import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Uri } from 'src/app/Module/Constant/uri';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  Url: Uri = new Uri();

  public GetCountries() : Observable<any>{
    return this.http.get(this.Url.CountryJson);
  }

}
