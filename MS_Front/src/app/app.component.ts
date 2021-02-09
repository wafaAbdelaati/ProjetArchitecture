import { Component, OnInit } from '@angular/core';

import { GetIPService } from './services/get-ip.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  
  constructor(private clientService:GetIPService){}  
  
  title = 'Get client IP';  
  clientIP:string;  
ngOnInit()  
  {  
    //this.getClientIP();  
  }  
  getClientIP()  
  {   
    this.clientService.getClientIPAddress().subscribe((res:any)=>{  
      this.clientIP=res.ip;  
      console.log("testttttt")
    });  
  }  
}