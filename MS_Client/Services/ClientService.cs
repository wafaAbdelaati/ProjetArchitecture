using MongoDB.Driver;
using ClientsApi.Models;
using System.Collections.Generic;
using System.Net;
using System.IO;
using System;

namespace ClientsApi.Services {

 public class ClientService { 

private readonly IMongoCollection<Client> _clients; 

public ClientService(IClientsDatabaseSettings settings) 

{
     DotNetEnv.Env.Load();

      //Console.WriteLine("My hostname is '{0}'", "BDClients.aliases");
  
                //Console.WriteLine(Dns.GetHostAddresses("BDClients.aliases")[0]);

     var client = new MongoClient("mongodb://"+Dns.GetHostAddresses(DotNetEnv.Env.GetString("HOST"))[0]+":"+DotNetEnv.Env.GetString("PORT")); 
    //var client = new MongoClient("mongodb://"+Dns.GetHostAddresses(BDClients.aliases)+":"+DotNetEnv.Env.GetString("PORT")); 
//var client = new MongoClient(settings.ConnectionString);
var database = client.GetDatabase(settings.DatabaseName); _clients=database.GetCollection<Client>(settings.ClientsCollectionName); } 

public List<Client>  Get() => _clients.Find(client => true).ToList();

public Client     Get(string id) => _clients.Find<Client> (client=>client.Id == id).FirstOrDefault(); 

public Client Create(Client client)
 { _clients.InsertOne(client);
 return client; }

 public void Update(string id, Client clientIn) => _clients.ReplaceOne(client => client.Id == id, clientIn);

 public void Remove(Client clientIn) => _clients.DeleteOne(client => client.Id == client.Id); 

public void Remove(string id) => _clients.DeleteOne(client=> client.Id == id); } 


}


 
