package com.examly.springapp.service;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.LoanModel;
import com.examly.springapp.repository.LoanRepository;

@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	LoanRepository loanRepository;
	

//	@Override
//	public LoanModel addLoan(LoanModel loanModel) {
//		return loanRepository.save(loanModel);	
//	}
	

	@Override
	public int addLoan(LoanModel loanModel) {
		loanRepository.save(loanModel);
		return loanModel.getLoanId();
	}

	@Override
	public LoanModel getLoan(Integer id) {
		return loanRepository.findById(id).get();
	}


//	@Override
//	public void update(LoanModel loanModel) {
//		loanRepository.save(loanModel) ;
//	}


	@Override
	public List<LoanModel> getLoanApplicationsByStatus(String status) {
		return loanRepository.findAllByStatus(status);
	}

	@Override
	public List<LoanModel> getLoanDetailsByStatus() {
		List<LoanModel> l= loanRepository.findAll();
        List<LoanModel> list=new ArrayList<>();
        List<LoanModel> listrev=new ArrayList<>();
        for(LoanModel la : l)
        {
            if(!la.getStatus().equals("pending")){
                list.add(la);
            }
        }
        Collections.reverse(list);
        int c=0;
        for(LoanModel la : list)
        {
            if(c<5)
            {
                listrev.add(la);
                c++;
            }
        }
        System.out.println(listrev);
        return listrev;
	}

	@Override
	public String updateLoanStatusById(String status, Integer id) {
		String currentStatus = "ongoing";
		LoanModel existingApplication = loanRepository.findById(id).orElse(null);
        existingApplication.setStatus(status);
        existingApplication.setCurrentStatus(currentStatus);
        loanRepository.save(existingApplication);
        return "Loan Status updated !!";
	}
	
	
	@Override
	public String updateRejectionReasonById(String rejectionReason, Integer id, String status) {
		LoanModel existingApplication = loanRepository.findById(id).orElse(null);
        existingApplication.setRejectionReason(rejectionReason);
        existingApplication.setStatus(status);
        loanRepository.save(existingApplication);
        return "reason updated !!";
	}

	@Override
	public List<LoanModel> getAllLoans() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoanModel update(LoanModel loanModel) {
		return loanRepository.save(loanModel);
	}
}