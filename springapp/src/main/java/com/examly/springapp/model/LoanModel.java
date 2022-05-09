package com.examly.springapp.model;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="LoanModel")
public class LoanModel {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loanId;
	
	private String applicantName;
	private String applicantAddress;	
	private String applicantMobile;	
	private String applicantEmail;	
	private String applicantAadhar;	
	private String applicantPan;	
	private String applicantSalary;	
	private int creditScore;	
	private long loanAmountRequired;	
	private int loanRepaymentMonths;	
	
	@Temporal(TemporalType.DATE )
	@Column(nullable = false)
	private Date applicationDate = new Date(System.currentTimeMillis());
		
	private String status;	
	private String currentStatus;	
	private String rejectionReason;	

	
	
	public LoanModel() {
		// TODO Auto-generated constructor stub
	}


	public LoanModel(int loanId, String applicantName, String applicantAddress, String applicantMobile,
			String applicantEmail, String applicantAadhar, String applicantPan, String applicantSalary, int creditScore,
			long loanAmountRequired, int loanRepaymentMonths, Date applicationDate, String status,
			String currentStatus, String rejectionReason) {
		super();
		this.loanId = loanId;
		this.applicantName = applicantName;
		this.applicantAddress = applicantAddress;
		this.applicantMobile = applicantMobile;
		this.applicantEmail = applicantEmail;
		this.applicantAadhar = applicantAadhar;
		this.applicantPan = applicantPan;
		this.applicantSalary = applicantSalary;
		this.creditScore = creditScore;
		this.loanAmountRequired = loanAmountRequired;
		this.loanRepaymentMonths = loanRepaymentMonths;
		this.applicationDate = applicationDate;
		this.status = status;
		this.currentStatus = currentStatus;
		this.rejectionReason = rejectionReason;
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




	public int getCreditScore() {
		return creditScore;
	}




	public void setCreditScore(int creditScore) {
		this.creditScore = creditScore;
	}




	public long getLoanAmountRequired() {
		return loanAmountRequired;
	}




	public void setLoanAmountRequired(long loanAmountRequired) {
		this.loanAmountRequired = loanAmountRequired;
	}




	public int getLoanRepaymentMonths() {
		return loanRepaymentMonths;
	}




	public void setLoanRepaymentMonths(int loanRepaymentMonths) {
		this.loanRepaymentMonths = loanRepaymentMonths;
	}


	public Date getApplicationDate() {
		return applicationDate;
	}




	public void setApplicationDate(Date applicationDate) {
		this.applicationDate = applicationDate;
	}
	



	public String getStatus() {
		return status;
	}




	public void setStatus(String status) {
		this.status = status;
	}




	public String getCurrentStatus() {
		return currentStatus;
	}




	public void setCurrentStatus(String currentStatus) {
		this.currentStatus = currentStatus;
	}




	public String getRejectionReason() {
		return rejectionReason;
	}




	public void setRejectionReason(String rejectionReason) {
		this.rejectionReason = rejectionReason;
	}

}
