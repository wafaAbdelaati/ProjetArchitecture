import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterCategerieComponent } from './Categerie/ajouter-categerie/ajouter-categerie.component';
import { ListerCategerieComponent } from './Categerie/lister-categerie/lister-categerie.component';
import { ModifierCategerieComponent } from './Categerie/modifier-categerie/modifier-categerie.component';
import { ListerClientComponent } from './Client/lister-client/lister-client.component';
import { ListerCommandeComponent } from './Commande/lister-commande/lister-commande.component';
import { HomeComponent } from './home/home.component';
import { AjouterLivreComponent } from './Livre/ajouter-livre/ajouter-livre.component';
import { ListerLivreComponent } from './Livre/lister-livre/lister-livre.component';
import { ModifierLivreComponent } from './Livre/modifier-livre/modifier-livre.component';


const routes: Routes = [
  { path:"" , component: HomeComponent

}
, 

  { path:"Acces" , component:ListerCategerieComponent

}
, 

  { path:"voir" , component:ListerLivreComponent

}
, 

  { path:"clt" , component:ListerClientComponent

}

, 

  { path:"ajtlivre" , component:AjouterLivreComponent

}
, 

  { path:"ajtcate" , component:AjouterCategerieComponent

}
,
{ path:"modifierL/:id" , component: ModifierLivreComponent

}
,
{ path:"modifierCat/:id" , component: ModifierCategerieComponent

}
,
{ path:"commande" , component: ListerCommandeComponent

}

,

{ path:"livre1" , component: ListerLivreComponent

}




















];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
