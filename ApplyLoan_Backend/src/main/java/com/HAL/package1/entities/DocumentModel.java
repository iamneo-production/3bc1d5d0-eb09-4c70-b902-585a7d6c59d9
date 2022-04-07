package com.HAL.package1.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Service;

@Entity
@Service
public class DocumentModel {

	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loanId;
	@Id
	private String aadhar;
	
	private String pan;
	
	public DocumentModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public DocumentModel(String aadhar, String pan, String bankStatements, String paySlip,int loanId) {
		super();
		this.loanId=loanId;
		this.aadhar = aadhar;
		this.pan = pan;
		this.bankStatements = bankStatements;
		this.paySlip = paySlip;
	}

	private String bankStatements;
	
	private String paySlip;

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

	public String getBankStatements() {
		return bankStatements;
	}

	public void setBankStatements(String bankStatements) {
		this.bankStatements = bankStatements;
	}

	public String getPaySlip() {
		return paySlip;
	}

	public void setPaySlip(String paySlip) {
		this.paySlip = paySlip;
	}
}
