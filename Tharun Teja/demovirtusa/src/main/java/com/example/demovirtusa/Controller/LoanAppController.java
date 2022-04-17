package com.example.demovirtusa.Controller;

import com.example.demovirtusa.Models.LoanApplication;
import com.example.demovirtusa.Service.LoanAppService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class LoanAppController {
    
    @Autowired
    private LoanAppService loanAppService;

    @PostMapping("/addLoanAppl")
    public LoanApplication addLoan(@RequestBody LoanApplication loanApplication) {
        return loanAppService.addLoan(loanApplication);
    }
}
