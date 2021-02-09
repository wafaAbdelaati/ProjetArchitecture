import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterLivreComponent } from './Livre/ajouter-livre/ajouter-livre.component';
import { ModifierLivreComponent } from './Livre/modifier-livre/modifier-livre.component';
import { ListerLivreComponent } from './Livre/lister-livre/lister-livre.component';

import { ModifierCategerieComponent } from './Categerie/modifier-categerie/modifier-categerie.component';
import { AjouterCategerieComponent } from './Categerie/ajouter-categerie/ajouter-categerie.component';
import { AjouterCommandeComponent } from './Commande/ajouter-commande/ajouter-commande.component';
import { ModifierCommandeComponent } from './Commande/modifier-commande/modifier-commande.component';
import { ListerCommandeComponent } from './Commande/lister-commande/lister-commande.component';
import { ListerClientComponent } from './Client/lister-client/lister-client.component';
import { ModifierClientComponent } from './Client/modifier-client/modifier-client.component';
import { AjouterClientComponent } from './Client/ajouter-client/ajouter-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ListerCategerieComponent } from './Categerie/lister-categerie/lister-categerie.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterLivreComponent,
    ModifierLivreComponent,
    ListerLivreComponent,
    ListerCategerieComponent,
    ModifierCategerieComponent,
    AjouterCategerieComponent,
    AjouterCommandeComponent,
    ModifierCommandeComponent,
    ListerCommandeComponent,
    ListerClientComponent,
    ModifierClientComponent,
    AjouterClientComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
