import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Uri } from '../../Module/Constant/uri';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedUserService {

  constructor(private httpclient: HttpClient) { }

  private Url: Uri = new Uri();
  
  public GetMedUsers() : Observable<any>{
    return this.httpclient.get(this.Url.MedUsers);
  }

  public Create(data: any) : Observable<any>{
    return this.httpclient.post(this.Url.CreatePharmaUser, data);
  }

  public GetPharmaUserDetail(id: any) : Observable<any>{
    return this.httpclient.get(this.Url.GetPharmaUserDetail+"?userid="+id);
  }

  public UpdatePharmaUser(data: any) : Observable<any>{
    return this.httpclient.post(this.Url.UpdatePharmaUserDetail, data);
  }

  public DeletePharmaUser(userid: any) : Observable<any>{
    return this.httpclient.post(this.Url.DeletePharmaUserDetail, {userid: userid});
  }
}
