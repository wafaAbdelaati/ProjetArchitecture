import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-lister-livre',
  templateUrl: './lister-livre.component.html',
  styleUrls: ['./lister-livre.component.scss']
})
export class ListerLivreComponent implements OnInit {
  public livre:Livre[];
  public livreall:Livre[];
  config: any;
  constructor(private livreService:LivreService,private router:Router) { }

  ngOnInit(): void {
    this.Afficherlivre();
  }

  Afficherlivre()
  {

this.livreService.tous_livres().subscribe(data=>{
this.livre=data;
this.livreall=data;

console.log(data);},err=>{console.log(err);}
 
)

}





ajouterlivre(){
   
  this.router.navigateByUrl("/ajtlivre");
}


onDeleteL(id:number){

  let conf=confirm("etes vous sure?");
  if (conf)
  this.livreService.deletelivre(id).subscribe(data=>{
  this.Afficherlivre();},err=>{console.log(err)
  
  })
  
  }
  oneditL(id:number){
    this.router.navigateByUrl("/modifierL/"+id);
  }

  command(){
    this.router.navigateByUrl("/commande");
  }



}
