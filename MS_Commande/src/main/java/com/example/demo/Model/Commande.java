package com.example.demo.Model;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Commande  {
	
	@Id
	private String id;
	@NotNull 
	private Date Date_commande;
	@NotNull 
	private String id_client;
	private String etat;
	private Double montant;
	private List<CommandeDetail> Details;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getDate_commande() {
		return Date_commande;
	}

	public void setDate_commande(Date date_commande) {
		Date_commande = date_commande;
	}

	public String getId_client() {
		return id_client;
	}

	public void setId_client(String id_client) {
		this.id_client = id_client;
	}

	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Double getMontant() {
		return montant;
	}

	public void setMontant(Double montant) {
		this.montant = montant;
	}

	public List<CommandeDetail> getDetails() {
		return Details;
	}

	public void setDetails(List<CommandeDetail> details) {
		Details = details;
	}

	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Commande(@NotNull Date date_commande, @NotNull String id_client, String etat, Double montant,
			List<CommandeDetail> details) {
		super();
		Date_commande = new Date();
		this.id_client = id_client;
		this.etat = etat;
		this.montant = montant;
		Details = details;
	}
	
	
}


	
	
	
	


