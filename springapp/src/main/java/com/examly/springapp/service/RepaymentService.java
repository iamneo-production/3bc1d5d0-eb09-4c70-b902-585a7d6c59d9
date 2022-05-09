package com.examly.springapp.service;


import com.examly.springapp.model.LoanModel;
import com.examly.springapp.model.RepaymentModel;

public interface RepaymentService {

	
	public void addRepayment(LoanModel loanModel);

	public RepaymentModel getRepaymentbyId(int id);

	public RepaymentModel updateRepaymentByPayment(int id, float payment);

}