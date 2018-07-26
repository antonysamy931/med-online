import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaService {

  constructor(private http: HttpClient) { }

  Url: Uri = new Uri();

  public Pharmas() : Observable<any>{
    return this.http.get(this.Url.GetPharmas);
  }

  public Insert(data: any) : Observable<any>{
    return this.http.post(this.Url.CreatePharma,data);
  }

  public GetById(id: any) : Observable<any>{
    return this.http.get(`${this.Url.PharmaById}?id=${id}`);
  }

  public Update(data: any) : Observable<any>{
    return this.http.post(this.Url.UpdatePharmaDetail, data);
  }

  public Delete(data: any) : Observable<any>{
    return this.http.post(this.Url.DeletePharmaDetail, data);
  }

  public Count() : Observable<any>{
    return this.http.get(this.Url.PharmaCount);
  }
}
