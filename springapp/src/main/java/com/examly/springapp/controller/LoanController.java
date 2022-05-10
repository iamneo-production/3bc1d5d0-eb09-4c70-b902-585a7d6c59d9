package com.examly.springapp.controller;
import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.examly.springapp.model.LoanModel;
import com.examly.springapp.repository.LoanRepository;
import com.examly.springapp.service.LoanService;
        
 
//@CrossOrigin(origins = "*", maxAge = 3600)
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/")
public class LoanController {
	
	
	@Autowired
	private LoanService loanService;
	
	@Autowired
	private LoanRepository loanRepository;
	

	@PostMapping("user/addLoan")
	public int addLoan(@RequestBody LoanModel loanModel) {
		return loanService.addLoan(loanModel);
	}
	

	@GetMapping("user/getAllLoans")
	public List<LoanModel> getAllLoans(){
		return loanService.getAllLoans() ;
	}
	

	@GetMapping("user/getLoan/{id}")
	public ResponseEntity<LoanModel> getLoan(@PathVariable Integer id){
		try {
			LoanModel loanModel = loanService.getLoan(id);
			return new ResponseEntity<LoanModel>( loanModel, HttpStatus.OK);
		}
		catch(NoSuchElementException e){
			return new ResponseEntity<LoanModel>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//For updating the loan by user
    @PutMapping(value = {"user/editLoan/{id}", "user/editProfile/{id}"})
    public LoanModel updateLoanStatusById(@RequestBody LoanModel loanModel, @PathVariable Integer id) {
        return loanService.update(loanModel);
    }
    

    @DeleteMapping( value = {"user/deleteLoan/{id}" , "admin/deleteLoan/{id}"})
    public ResponseEntity<HttpStatus> deleteLoanApplication( @PathVariable Integer id){
    	LoanModel loanModel = loanRepository.findById(id).orElse(null);
   	
    	loanRepository.delete(loanModel);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}