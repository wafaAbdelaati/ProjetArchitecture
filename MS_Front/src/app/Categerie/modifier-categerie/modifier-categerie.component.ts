import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-modifier-categerie',
  templateUrl: './modifier-categerie.component.html',
  styleUrls: ['./modifier-categerie.component.scss']
})
export class ModifierCategerieComponent implements OnInit {
  public mcat:Category;
  constructor(private categService:CategoryService,private activeRoute:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    this.get1categ();
  }
  get1categ(){

    this.categService. get1cat(this.activeRoute.snapshot.params.id).subscribe(data=>{this.mcat=data},err=>{console.log(err)})
    
      }
      updatecat(value:any){
        let cg:Category;
        cg= new Category(this.activeRoute.snapshot.params.id,value.type,value.description);
        this.categService.modifier_cat(cg).subscribe(data=>this.router.navigateByUrl("/categ1"))
    
      }



    
}
