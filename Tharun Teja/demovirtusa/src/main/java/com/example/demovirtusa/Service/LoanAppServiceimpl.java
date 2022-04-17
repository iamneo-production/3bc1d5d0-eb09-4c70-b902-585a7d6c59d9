package com.example.demovirtusa.Service;

import java.util.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.example.demovirtusa.Models.LoanApplication;
import com.example.demovirtusa.Repository.LoanAppRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanAppServiceimpl implements LoanAppService {


    @Autowired	
    LoanAppRepository repository;
	
	@Override
	public LoanApplication addLoan(LoanApplication loanapplication) {
		
		repository.save(loanapplication);
		return loanapplication;
	}

    @Override
    public List<LoanApplication> getLoanApplicationsByStatus(String status) {
        return repository.findAllByStatus(status);
    }

    @Override
    public List<LoanApplication> getLoanDetailsByStatus() {
        List<LoanApplication> l=repository.findAll();
        List<LoanApplication> list=new ArrayList<>();
        List<LoanApplication> listrev=new ArrayList<>();
        for(LoanApplication la : l)
        {
            if(!la.getStatus().equals("pending")){
                list.add(la);
            }
        }
        Collections.reverse(list);
        int c=0;
        for(LoanApplication la : list)
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
    public LoanApplication getLoanApplicationByloanId(Long loanId)
    {
        return repository.findById(loanId).orElse(null);
    }

    //////
    @Override
    public List<LoanApplication> getLoanApplications() {
        return repository.findAll();
    }

    @Override
    public String deleteLoanApplication(Long loanid) {
        repository.deleteById(loanid);
        return "Appliacant loan is removed"+loanid;
    }

    @Override
    public LoanApplication updateLoanApplication(LoanApplication loanApplication) {
        LoanApplication existingApplication = repository.findById(loanApplication.getLoanId()).orElse(null);
        existingApplication.setName(loanApplication.getName());
        existingApplication.setPhone(loanApplication.getPhone());
        existingApplication.setEmail(loanApplication.getEmail());
        existingApplication.setAadhar_no(loanApplication.getAadhar_no());
        existingApplication.setPan_no(loanApplication.getPan_no());
        existingApplication.setSalary(loanApplication.getSalary());
        existingApplication.setLoanAmountRequired(loanApplication.getLoanAmountRequired());
        existingApplication.setLoanRepaymentMonths(loanApplication.getLoanRepaymentMonths());
        existingApplication.setStatus(loanApplication.getStatus());
        return repository.save(existingApplication);
    }

    @Override
    public String updateLoanStatusById(String status,Long LoanId) {
        LoanApplication existingApplication = repository.findById(LoanId).orElse(null);
        existingApplication.setStatus(status);
        repository.save(existingApplication);
        return "Status updated !!";
    }

    @Override
    public String updateRejectionReasonById(String reasonForRejection,Long LoanId,String status) {
        LoanApplication existingApplication = repository.findById(LoanId).orElse(null);
        existingApplication.setReasonForRejection(reasonForRejection);
        existingApplication.setStatus(status);
        repository.save(existingApplication);
        return "reason updated !!";
    }
}
