package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;





@SpringBootApplication
@EnableDiscoveryClient
public class CommandeApplication  {
	/* private RepositoryRestConfiguration restcon; */
	public static void main(String[] args) {
		
	/*	restcon.exposeIdsFor(Commande.class);*/
		SpringApplication.run(CommandeApplication.class, args);
	}

	

}
