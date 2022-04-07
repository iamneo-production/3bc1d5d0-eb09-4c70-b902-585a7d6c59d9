package com.HAL.package1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.HAL.package1.dao.Documentdao;
import com.HAL.package1.dao.Loandao;
import com.HAL.package1.entities.DocumentModel;
import com.HAL.package1.entities.LoanApplicationModel;

@Service
public class Loanserviceimpl implements Loanservice {
@Autowired	
private Loandao loandao;
@Autowired
private Documentdao documentdao;

@Override
public List<LoanApplicationModel> getLoanApplicationsModel() {
    return loandao.findAll();
}


	@Override
	public LoanApplicationModel addLoan(LoanApplicationModel loanapplicationmodel) {
		// TODO Auto-generated method stub
		loandao.save(loanapplicationmodel);
		return loanapplicationmodel;
	}
	
@Override
public DocumentModel addDocuments(DocumentModel documentmodel) {
	System.out.println(documentmodel.getAadhar());
	System.out.println(documentmodel.getPan());
	System.out.println(documentmodel.getBankStatements());
	System.out.println(documentmodel.getPaySlip());
	System.out.println(documentmodel.getLoanId());
	documentdao.save(documentmodel);
	System.out.println(documentmodel.getAadhar());
	System.out.println(documentmodel.getPan());
	System.out.println(documentmodel.getBankStatements());
	System.out.println(documentmodel.getPaySlip());
	System.out.println(documentmodel.getLoanId());
    return documentmodel;
}





	
}
