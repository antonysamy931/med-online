import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  Url: Uri = new Uri();
  
  public UploadMedicine(data: any): Observable<any>{
    return this.http.post(this.Url.UploadMedicine, {Medicines : data});
  }

}
