import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Livre } from '../model/livre';
import { GetIPService } from './get-ip.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private httpClient: HttpClient) { }


  readonly host = "http://"+environment.apiUrl+":8888/livreservice";

  public add_livre(objet:Livre){

    return this.httpClient.post<Livre>(this.host+"/books",objet);
    
    }



  public tous_livres(){

return this.httpClient.get<Livre[]>(this.host+"/books");
  }
  

  public get1livre (id:number){
    return this.httpClient.get<Livre>(this.host+"/books/"+id);
  }

  public deletelivre(id:number){


    return this.httpClient.delete(this.host+"/books/"+id);
    
    }

    public modifier_l(objet:Livre){
      return this.httpClient.put<Livre>(this.host+"/books/",objet);
    }





}
