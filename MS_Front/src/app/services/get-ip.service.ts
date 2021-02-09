import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIPService {

  constructor(private http: HttpClient) { }  
  public getClientIPAddress()  
  {  
    return this.http.get("http://MSZuul.aliases");  
  }  
}

