import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
/**
 * @author: Vaishnav Upadhyay
 * @class: CommunicatorService
 * @description: Service for making http request to server.
 */
@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private ws_url:any;
  private headers:HttpHeaders;

  constructor(private httpClient:HttpClient) { 
   this.ws_url = environment.API_URL;
  }

  public getRequest(url:any,header?:HttpHeaders,params?:HttpParams):Observable<any>{
    return this.httpClient.get(this.ws_url+url,{headers:header,params:params});
  }

  public postRequest(url:any,modal:any,header?:HttpHeaders,params?:HttpParams):Observable<any>{
    return this.httpClient.post(this.ws_url+url,modal,{headers:header,params:params});
  }

  public putRequest(url:any,modal:any,header?:HttpHeaders,params?:HttpParams):Observable<any>{
    return this.httpClient.put(this.ws_url+url,modal,{headers:header,params:params});
  }

  public deleteRequest(url:any,header?:HttpHeaders,params?:HttpParams):Observable<any>{
    return this.httpClient.delete(this.ws_url+url,{headers:header,params:params});
  }


}
