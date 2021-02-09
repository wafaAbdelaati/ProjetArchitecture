package com.example.demo.Model;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import java.lang.Double;
import com.example.demo.Model.Commande;
import java.util.List;

@RepositoryRestResource
public interface CommandeRepository extends MongoRepository<Commande, String>
{  
	@RestResource(path="/byprice")
	  List<Commande> findByMontantGreaterThan(@Param("mt")Double montant);
	  
	  @RestResource(path="/bypriceparP")
	 Page<Commande> findByMontantGreaterThan(@Param("mt")Double montant, Pageable P);
}
