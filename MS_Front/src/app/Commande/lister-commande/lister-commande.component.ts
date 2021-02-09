import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { CommandeService } from 'src/app/services/commande.service';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-lister-commande',
  templateUrl: './lister-commande.component.html',
  styleUrls: ['./lister-commande.component.scss']
})
@Pipe({
  name: 'valueArray',
})
export class ListerCommandeComponent implements OnInit {
  public cmd:Commande[];
  public cmdall:Commande[];
  transform(objects : any = []) {
    return Object.values(objects);
  }
  constructor(private cmService:CommandeService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Affichercom();
  }
  Affichercom()
  {
    this.cmService.tous_commandes().subscribe(data=>{
      this.cmd=data;
      this.cmdall=data;
      
      console.log(data);},err=>{console.log(err);}
       
      )
}



}
