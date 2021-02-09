import express, {Request, Response} from 'express';
import Book from "./modules/book";
import bodyParser from "body-parser";
import serveStatic from "serve-static";
import mongoose from "mongoose";
import cors from "cors";
const Eureka = require('eureka-js-client').Eureka;
require('dotenv').config();
let configClient = require('node-config-client');
var Database:String;
const eureka = new Eureka({
    instance: {
      instanceId: 'LIVRESERVICE',
      app: 'LIVRESERVICE',
      hostName: process.env.HOSTNAME,
      ipAddr: process.env.ADRESSE,
      statusPageUrl: 'http://'+process.env.HOSTNAME+':'+process.env.PORT,
      port: {
        '$': process.env.PORT,
        '@enabled': 'true',
      },
      vipAddress: 'LIVRESERVICE',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
      registerWithEureka: true,
      fetchRegistry: true,
  
    },
    eureka: {
      host: process.env.EUREKA_HOST,
      port: process.env.EUREKA_PORT,
      servicePath: '/eureka/apps/'
    }
  });
  eureka.logger.level('debug');
  
  eureka.start(function(error){
    console.log(error || 'complete');
  });
import mongoosePaginate from "mongoose-paginate";
/* Instancier Express */

const app=express();
/* Middleware bodyParser pour parser le corps des requêtes en Json*/
app.use(bodyParser.json());
/* Middlware pour configurer le dossier des ressources statique*/
app.use(serveStatic("public"));
/* Actvier CORS*/
app.use(cors());

//configClient.load({
//	name:'livres-service', // spring application name
 //   location:'localhost:8888', // spring cloud server address
   // name:'application_name', // spring application name
	//profiles:['prod','test','dev'], // spring profiles    
	//label:'master', // git branch
	//location:'localhost:8888', // spring cloud server address

//}).then(config => {
  // getting configuration
	//console.log(`mysql host: ${config.get('mysql.frota.host')}`);
	//console.log(`mysql username: ${config.get('mysql.username')}`);
	//console.log(`mysql password: ${config.get('mysql.password')}`);
    //console.log(`mysql database: ${config.get('Database')}`);
    //const Database:String=`${config.get('Database')}`
//console.log(config.get('Database'))
/*const uri:string="mongodb://Livres.aliases:27017/biblio";*/
const uri:string="mongodb://"+process.env.DATABASE+":"+process.env.DBPORT+"/biblio";
//const uri:string="mongodb://localhost:27017/biblio";
mongoose.connect(uri,(err)=>{
if(err){ console.log(err); }
else{ console.log("Mongo db connection sucess"); }
});

app.get("/",(req:Request,resp:Response)=>{
    resp.send("Hello world");
    });

    /* Requête HTTP GET http://localhost:8700/ */
app.get("/",(req:Request,resp:Response)=>{
    resp.send("Hello world");
    });
    /* Requête HTTP GET http://localhost:8700/books */
    app.get("/books",(req:Request,resp:Response)=>{
    Book.find((err,books)=>{
    if(err){ resp.status(500).send(err); }
    else{ resp.send(books); }
    })
    });
    /* Requête HTTP GET http://localhost:8700/books/id */
    app.get("/books/:id",(req:Request,resp:Response)=>{
    Book.findById(req.params.id,(err,book)=>{
    if(err){ resp.status(500).send(err); }
    else{ resp.send(book); }
    });
    });

    /* Requête HTTP POST http://localhost:8700/books */
app.post("/books",(req:Request,resp:Response)=>{
    let book=new Book(req.body);
    book.save(err=>{
    if (err) resp.status(500).send(err);
    else resp.send(book);
    })
    });
    /* Requête HTTP PUT http://localhost:8700/books/id */
    app.put("/books/:id",(req:Request,resp:Response)=>{
    Book.findByIdAndUpdate(req.params.id,req.body,(err,book)=>{
    if (err) resp.status(500).send(err);
    else{
    resp.send("Successfuly updated book");
    }
    })
    });

    /* Requête HTTP DELETE http://localhost:8700/books/id */
app.delete("/books/:id",(req:Request,resp:Response)=>{
    Book.deleteOne({_id:req.params.id},err=>{
    if(err) resp.status(500).send(err);
    else resp.send("Successfuly deleted Book");
    });
    });

    /* app.get("/pbooks",(req:Request,resp:Response)=>{
        let p:number=parseInt(req.query.page || 1);
        let size:number=parseInt(req.query.size || 5);
        Book.paginate({}, { page: p, limit: size }, function(err, result) {
        if(err) resp.status(500).send(err);
        else resp.send(result);
        });
        });

        app.get("/books-serach",(req:Request,resp:Response)=>{
            let p:number=parseInt(req.query.page || 1);
            let size:number=parseInt(req.query.size || 5);
            let keyword:string=req.query.kw || '';
            Book.paginate({title:{$regex:".*(?i)"+keyword+".*"}}, { page: p, limit:
            size }, function(err, result) {
            if(err) resp.status(500).send(err);
            else resp.send(result);
            });
            }); */
    /* Démarrer le serveur*/
    app.listen(process.env.PORT,()=>{
    console.log("Server Started on port %d",process.env.PORT);
    });