package com.HAL.package1.entities;

import java.util.Date;




import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



//import org.springframework.stereotype.Service;

@Entity
//@Service
@Table(name="LoanApplicationModel")
public class LoanApplicationModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loanId;
	@Column(name = "applicantName")
	private String applicantName;
	
	@Column(name = "applicantAddress")
	private String applicantAddress;
	
	@Column(name = "applicantMobile")
	private String applicantMobile;
	
	@Column(name = "applicantEmail")
	private String applicantEmail;
	
	@Column(name = "applicantAadhar")
	private String applicantAadhar;
	
	@Column(name = "applicantPan")
	private String applicantPan;
	
	@Column(name = "applicantSalary")
	private String applicantSalary;
	
	@Column(name = "loanAmountRequired")
	private String loanAmountRequired;
	
	@Column(name = "loanRepaymentMonths")
	private String loanRepaymentMonths;
	
	@Column(name = "applicantCreditScore")
	private String applicantCreditScore;
	
	@Column(name="Date")
	@Temporal(TemporalType.DATE)
	private Date date = new Date(System.currentTimeMillis()) ;
	

	
	
	/*
	 * private String Aadhar;
	 * 
	 * private String Pan;
	 * 
	 * private String BankStatements;
	 * 
	 * private String Payslip;
	 */
	

	public LoanApplicationModel() {
		// TODO Auto-generated constructor stub
	}

	

	public LoanApplicationModel(String applicantName, String applicantAddress, String applicantMobile,
			String applicantEmail, String applicantAadhar, String applicantPan, String applicantSalary,
			String loanAmountRequired, String loanRepaymentMonths, String applicantCreditScore,Date date,String Aadhar,String Pan,String BankStatements,String Payslip) {
        super();
		this.applicantName = applicantName;
		this.applicantAddress = applicantAddress;
		this.applicantMobile = applicantMobile;
		this.applicantEmail = applicantEmail;
		this.applicantAadhar = applicantAadhar;
		this.applicantPan = applicantPan;
		this.applicantSalary = applicantSalary;
		this.loanAmountRequired = loanAmountRequired;
		this.loanRepaymentMonths = loanRepaymentMonths;
		this.applicantCreditScore = applicantCreditScore;
		
		
		
	}



	
	/*
	 * public Date getDate() { return date; }
	 * 
	 * 
	 * 
	 * public void setDate(Date date) { this.date = new
	 * Date(System.currentTimeMillis()); }
	 * 
	 */

	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}





	public String getApplicantCreditScore() {
		return applicantCreditScore;
	}



	public void setApplicantCreditScore(String applicantCreditScore) {
		this.applicantCreditScore = applicantCreditScore;
	}



	public int getLoanId() {
		return loanId;
	}



	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}



	public String getApplicantName() {
		return applicantName;
	}


	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}


	public String getApplicantAddress() {
		return applicantAddress;
	}


	public void setApplicantAddress(String applicantAddress) {
		this.applicantAddress = applicantAddress;
	}


	public String getApplicantMobile() {
		return applicantMobile;
	}


	public void setApplicantMobile(String applicantMobile) {
		this.applicantMobile = applicantMobile;
	}


	public String getApplicantEmail() {
		return applicantEmail;
	}


	public void setApplicantEmail(String applicantEmail) {
		this.applicantEmail = applicantEmail;
	}


	public String getApplicantAadhar() {
		return applicantAadhar;
	}


	public void setApplicantAadhar(String applicantAadhar) {
		this.applicantAadhar = applicantAadhar;
	}


	public String getApplicantPan() {
		return applicantPan;
	}


	public void setApplicantPan(String applicantPan) {
		this.applicantPan = applicantPan;
	}


	public String getApplicantSalary() {
		return applicantSalary;
	}


	public void setApplicantSalary(String applicantSalary) {
		this.applicantSalary = applicantSalary;
	}


	public String getLoanAmountRequired() {
		return loanAmountRequired;
	}


	public void setLoanAmountRequired(String loanAmountRequired) {
		this.loanAmountRequired = loanAmountRequired;
	}


	public String getLoanRepaymentMonths() {
		return loanRepaymentMonths;
	}


	public void setLoanRepaymentMonths(String loanRepaymentMonths) {
		this.loanRepaymentMonths = loanRepaymentMonths;
	}





	
	
	
	
}
