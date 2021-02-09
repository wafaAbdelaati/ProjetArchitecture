import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-ajouter-livre',
  templateUrl: './ajouter-livre.component.html',
  styleUrls: ['./ajouter-livre.component.scss']
})
export class AjouterLivreComponent implements OnInit {
  public l:Livre;
  mode:number=1;
  constructor(private lService:LivreService) { }

  ngOnInit():void  {
  }

  Onsavelivre(data:Livre){

    this.lService.add_livre(data).subscribe(res=>{
      this.l=res;
      this.mode=2},err=>(console.log(err)))
    
    
      }
      Onewlivre(){
    
    this.mode=1;
    
      }


}
