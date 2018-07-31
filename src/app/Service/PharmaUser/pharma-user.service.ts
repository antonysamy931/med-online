import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaUserService {

  constructor(private http: HttpClient) { }

  private Url: Uri = new Uri();

  public GetPharmaUsers(id) : Observable<any>{
    return this.http.get(this.Url.PharmaUsers+"?pharmaid="+id);
  }

  public Create(data: any) : Observable<any>{
    return this.http.post(this.Url.CreatePharmaUser, data);
  }

  public GetPharmaUserDetail(id: any) : Observable<any>{
    return this.http.get(this.Url.GetPharmaUserDetail+"?userid="+id);
  }

  public UpdatePharmaUser(data: any) : Observable<any>{
    return this.http.post(this.Url.UpdatePharmaUserDetail, data);
  }

  public DeletePharmaUser(userid: any) : Observable<any>{
    return this.http.post(this.Url.DeletePharmaUserDetail, {userid: userid});
  }
}
