import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl='https://a93andm9wi.execute-api.ap-south-1.amazonaws.com/dev/';
  constructor(private http:HttpClient) { }

  get<T>(url:string){
    return this.http.get<T>(this.baseUrl+url);
  }
  getData(url:string){
    return this.http.get(this.baseUrl+url);
  }
}