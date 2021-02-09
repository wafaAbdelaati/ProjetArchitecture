import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-lister-client',
  templateUrl: './lister-client.component.html',
  styleUrls: ['./lister-client.component.scss']
})
export class ListerClientComponent implements OnInit {
  public client:Client[];
  public clientall:Client[];
  constructor(private clientService:ClientService,private router:Router) { }

  ngOnInit(): void {
    this.Afficherclient();
  }

  Afficherclient()
  {

this.clientService.tous_clients().subscribe(data=>{
this.client=data;
this.clientall=data;

console.log(data);},err=>{console.log(err);}
 
)

}



}
