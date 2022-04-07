package com.HAL.package1.service;

import java.util.List;

import com.HAL.package1.entities.DocumentModel;
import com.HAL.package1.entities.LoanApplicationModel;


public interface Loanservice {

	public LoanApplicationModel addLoan(LoanApplicationModel loanapplicationmodel);

	public List<LoanApplicationModel> getLoanApplicationsModel();

	public DocumentModel addDocuments(DocumentModel documentmodel);



}
