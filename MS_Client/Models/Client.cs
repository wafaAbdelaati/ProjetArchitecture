using MongoDB.Bson;
 using MongoDB.Bson.Serialization.Attributes;

 namespace ClientsApi.Models 
{ 
[BsonIgnoreExtraElements] 
public class Client { 

[BsonId] [BsonRepresentation(BsonType.ObjectId)] 
public string Id { get; set; }


 public string  Adresse { get; set; } 

 [BsonElement("Nom")]
 public string Nom { get; set; }
 [BsonElement("Prenom")]
 public string Prenom { get; set; }

 public string Tel { get; set; } } }
