namespace ClientsApi.Models { 

public class ClientsDatabaseSettings :IClientsDatabaseSettings 

{ public string ClientsCollectionName { get; set; } 
public string ConnectionString { get; set; } 
public string DatabaseName { get; set; } } 

public interface IClientsDatabaseSettings {
 string ClientsCollectionName { get; set; }
 string ConnectionString { get; set; }
 string DatabaseName { get; set; } } }