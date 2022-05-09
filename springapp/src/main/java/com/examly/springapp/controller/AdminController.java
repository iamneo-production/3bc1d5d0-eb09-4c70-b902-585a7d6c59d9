package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.LoanModel;
import com.examly.springapp.service.LoanService;


//@CrossOrigin(origins = "*", maxAge = 3600)
@CrossOrigin("http://localhost:3000")   
@RestController
@RequestMapping("/")
public class AdminController {  
	
	@Autowired
	private LoanService loanService;
	

	@GetMapping("admin/getLoan/{id}")
	public LoanModel getLoan(@PathVariable Integer id) {
		return loanService.getLoan(id);
	}

//	For the applied loans component
    @GetMapping("admin/getAllLoans/{status}")
    public List<LoanModel> getLoanApplicationsByStatus(@PathVariable String status)  {
            return loanService.getLoanApplicationsByStatus(status);   
    }
    
//    For the whole loan details component
    @GetMapping("admin/getAllLoans")
    public List<LoanModel> getLoanDetailsByStatus()  {
        return loanService.getLoanDetailsByStatus();
    } 
    
    //For the approve button of applied loans component
    @PutMapping("admin/editLoan/{id}/{status}")
    public String updateLoanStatusById(@PathVariable String status, @PathVariable Integer id) {
        return loanService.updateLoanStatusById(status, id);
    }
    
  //For the reject button in applied loans component
    @PutMapping("admin/updateReason/{id}/{status}/{reasonForRejection}")
    public String updateRejectionReasonById(@PathVariable String reasonForRejection,@PathVariable Integer id,@PathVariable String status) {
        return loanService.updateRejectionReasonById(reasonForRejection, id, status);
    }

}

