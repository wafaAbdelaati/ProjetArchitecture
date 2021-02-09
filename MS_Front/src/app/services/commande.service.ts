import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  
  constructor(private httpClient: HttpClient) { }
  readonly host = "http://"+environment.apiUrl+":8888/commande-service";

  public add_commande(objet:Commande){

    return this.httpClient.post<Commande>(this.host+"/commandes",objet);
    
    }



  public tous_commandes(){

return this.httpClient.get<Commande[]>(this.host+"/commandes");
  }
  


  public deletecommande(id:number){


    return this.httpClient.delete(this.host+"/commandes/"+id);
    
    }



}
