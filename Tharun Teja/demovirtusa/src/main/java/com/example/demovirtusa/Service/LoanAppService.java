package com.example.demovirtusa.Service;

import java.util.List;

import com.example.demovirtusa.Models.LoanApplication;

public interface LoanAppService {

	public LoanApplication addLoan(LoanApplication loanApplication);
    public List<LoanApplication> getLoanApplicationsByStatus(String status);
    public List<LoanApplication> getLoanApplications();
    public List<LoanApplication> getLoanDetailsByStatus();
    public LoanApplication getLoanApplicationByloanId(Long loanId);
    public String deleteLoanApplication(Long loanid);
    public String updateLoanStatusById(String status,Long LoanId);
    public String updateRejectionReasonById(String reasonForRejection,Long LoanId,String status);
    public LoanApplication updateLoanApplication(LoanApplication loanApplication);
}
