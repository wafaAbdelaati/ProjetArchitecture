import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-modifier-livre',
  templateUrl: './modifier-livre.component.html',
  styleUrls: ['./modifier-livre.component.scss']
})
export class ModifierLivreComponent implements OnInit {
  public mlivre:Livre;
  constructor(private lvService:LivreService,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.get1livre();
  }



  get1livre(){

    this.lvService. get1livre(this.activeRoute.snapshot.params.id).subscribe(data=>{this.mlivre=data},err=>{console.log(err)})
    
      }
    
      
     updatelivre (value:any){
        let uni:Livre;
        uni= new Livre(this.activeRoute.snapshot.params.id,value.title,value.author,value.price,value.quantity);
        this.lvService.modifier_l(uni).subscribe(data=>this.router.navigateByUrl("/livre1"))
    
      }









}
