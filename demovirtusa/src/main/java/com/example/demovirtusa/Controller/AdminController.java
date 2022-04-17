package com.example.demovirtusa.Controller;

import java.util.List;

import com.example.demovirtusa.Models.LoanApplication;
import com.example.demovirtusa.Models.User;
import com.example.demovirtusa.Service.LoanAppServiceimpl;
import com.example.demovirtusa.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    
    @Autowired
    private LoanAppServiceimpl lservice;

    @PostMapping("/admin/addLoan")
    public LoanApplication addLoan(@RequestBody LoanApplication loanApplication) {
        return lservice.addLoan(loanApplication);
    }

    @GetMapping("/admin/getAllLoans/{status}")
    public List<LoanApplication> getLoanApplications(@PathVariable String status)  {
        if(status.length()>0){
            System.out.println(status);
            return lservice.getLoanApplicationsByStatus(status);
        }
        else{
            return lservice.getLoanApplications();
        }
        
    }

    @GetMapping("/admin/getloanapplication/{loanId}")
    public LoanApplication findById(@PathVariable Long loanId)
    {
        return lservice.getLoanApplicationByloanId(loanId);
    }

    @GetMapping("/admin/getAllLoanDetails")
    public List<LoanApplication> getLoanDetailsByStatus()  {
        return lservice.getLoanDetailsByStatus();
    }
    
    @PutMapping("/admin/updatestatus/{id}/{status}")
    public String updateLoanStatusById(@PathVariable String status,@PathVariable Long id) {
        return lservice.updateLoanStatusById(status, id);
    }

    @PutMapping("/admin/updatereason/{id}/{status}/{reasonForRejection}")
    public String updateRejectionReasonById(@PathVariable String reasonForRejection,@PathVariable Long id,@PathVariable String status) {
        return lservice.updateRejectionReasonById(reasonForRejection, id, status);
    }

    @PutMapping("/admin/editLoan/{loanId}")
    public LoanApplication updateLoanApplication(@RequestBody LoanApplication loanApplication) {
        return lservice.updateLoanApplication(loanApplication);
    }

    @DeleteMapping("/admin/deleteLoan/{loanId}")
    public String deleteLoanApplication(@PathVariable Long loanId) {
        return lservice.deleteLoanApplication(loanId);
    }

}
