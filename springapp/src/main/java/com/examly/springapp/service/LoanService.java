package com.examly.springapp.service;


import java.util.List;
import com.examly.springapp.model.LoanModel;

public interface LoanService {

//	public LoanModel addLoan(LoanModel loanModel);
	public int addLoan(LoanModel loanModel);
	
	public List<LoanModel> getAllLoans();
	public List<LoanModel> getLoanApplicationsByStatus(String status);
	public List<LoanModel> getLoanDetailsByStatus();
	public String updateLoanStatusById(String status,Integer id);
    public String updateRejectionReasonById(String rejectionReason,Integer id,String status);
	public LoanModel getLoan(Integer id);
	public LoanModel update(LoanModel loanModel);
	
}