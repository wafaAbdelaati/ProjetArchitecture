import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-ajouter-categerie',
  templateUrl: './ajouter-categerie.component.html',
  styleUrls: ['./ajouter-categerie.component.scss']
})
export class AjouterCategerieComponent implements OnInit {
  public ct:Category;
  mode:number=1;
  constructor(private ctService:CategoryService) { }

  ngOnInit():void  {
  }
  Onsavecat(data:Category){

    this.ctService.add_cat(data).subscribe(res=>{
      this.ct=res;
      this.mode=2},err=>(console.log(err)))
    
    
      }
      Onewcate(){
    
    this.mode=1;
    
      }

}
