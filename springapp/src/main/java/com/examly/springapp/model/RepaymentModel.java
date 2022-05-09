package com.examly.springapp.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class RepaymentModel {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int repaymentId;
	
	private float balanceAmount;	
	private int monthCounter;	
	private String installmentDate;	
	private float installmentDue;	
	private float initialMonthlyDue;
	
	
	public RepaymentModel() {
		
	}
	
	public RepaymentModel(float balanceAmount, int monthCounter, String installmentDate, float installmentDue,
			float initialMonthlyDue) {
		super();
		this.balanceAmount = balanceAmount;
		this.monthCounter = monthCounter;
		this.installmentDate = installmentDate;
		this.installmentDue = installmentDue;
		this.initialMonthlyDue = initialMonthlyDue;
	}


	public int getRepaymentId() {
		return repaymentId;
	}


	public void setRepaymentId(int repaymentId) {
		this.repaymentId = repaymentId;
	}

	
	
	public float getBalanceAmount() {
		return balanceAmount;
	}


	public void setBalanceAmount(float balanceAmount) {
		this.balanceAmount = balanceAmount;
	}


	public int getMonthCounter() {
		return monthCounter;
	}


	public void setMonthCounter(int monthCounter) {
		this.monthCounter = monthCounter;
	}


	public String getInstallmentDate() {
		return installmentDate;
	}


	public void setInstallmentDate(String installmentDate) {
		this.installmentDate = installmentDate;
	}


	public float getInstallmentDue() {
		return installmentDue;
	}


	public void setInstallmentDue(float installmentDue) {
		this.installmentDue = installmentDue;
	}


	public float getInitialMonthlyDue() {
		return initialMonthlyDue;
	}


	public void setInitialMonthlyDue(float initialMonthlyDue) {
		this.initialMonthlyDue = initialMonthlyDue;
	}
	
	
}