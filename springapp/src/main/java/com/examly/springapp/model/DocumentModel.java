package com.examly.springapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="DocumentModel")
public class DocumentModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int documentId;
	
	private String aadhar;
	private String pan;
	private String bankStatement;
	private String paySlip;
		
	
	
	public DocumentModel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public DocumentModel(int documentId, String aadhar, String pan, String bankStatement, String paySlip) {
		super();
		this.documentId = documentId;
		this.aadhar = aadhar;
		this.pan = pan;
		this.bankStatement = bankStatement;
		this.paySlip = paySlip;
	}


	public int getDocumentId() {
		return documentId;
	}


	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}


	public String getAadhar() {
		return aadhar;
	}


	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}


	public String getPan() {
		return pan;
	}


	public void setPan(String pan) {
		this.pan = pan;
	}


	public String getBankStatement() {
		return bankStatement;
	}


	public void setBankStatement(String bankStatement) {
		this.bankStatement = bankStatement;
	}


	public String getPaySlip() {
		return paySlip;
	}


	public void setPaySlip(String paySlip) {
		this.paySlip = paySlip;
	}

}
