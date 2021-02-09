export class Livre {

    title:String
    author:String
    _id:String
    price:number
    quantity:number

    constructor(_id:String,price:number,quantity:number, author:String, title:String)
    {
        this.quantity=quantity;
        this.price=price;
        this.author=author;
        this.title=title;
       this._id=_id

    }






}
