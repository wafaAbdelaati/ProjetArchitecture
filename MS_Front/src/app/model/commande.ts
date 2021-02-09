export class Commande {

    etat:String
    
    id:String
    montant:number
 
    constructor(id:String,montant:number, etat:String)
    {
        this.montant=montant;
       
        this.etat=etat;
        this.id=id

    }


}
