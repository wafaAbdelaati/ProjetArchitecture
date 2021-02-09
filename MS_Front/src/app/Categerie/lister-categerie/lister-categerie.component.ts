import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-lister-categerie',
  templateUrl: './lister-categerie.component.html',
  styleUrls: ['./lister-categerie.component.scss']
})
export class ListerCategerieComponent implements OnInit {
  public cat:Category[];
  public catall:Category[];
  constructor(private catService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.Affichercat();
  }
  Affichercat()
  {

this.catService.tous_cat().subscribe(data=>{
this.cat=data;
this.catall=data;

console.log(data);},err=>{console.log(err);}
 
)

}


oncosult(){
   
  this.router.navigateByUrl("/voir");
}

onDeleteC(id:number){

  let conf=confirm("etes vous sure?");
  if (conf)
  this.catService.deletecat(id).subscribe(data=>{
  this.Affichercat();},err=>{console.log(err)
  
  })
  
  }

  ajoutercate(){
   
    this.router.navigateByUrl("/ajtcate");
  }
  
  oneditCat(id:number){
    this.router.navigateByUrl("/modifierCat/"+id);
  }


}
