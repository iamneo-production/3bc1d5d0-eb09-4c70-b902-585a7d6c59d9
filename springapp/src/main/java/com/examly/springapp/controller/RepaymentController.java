package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import com.examly.springapp.model.RepaymentModel;
import com.examly.springapp.repository.RepaymentRepository;
import com.examly.springapp.service.RepaymentService;

//@CrossOrigin(origins = "*")
@CrossOrigin("http://localhost:3000")   
@RestController
@RequestMapping("/")
public class RepaymentController {
	
	@Autowired
	private RepaymentService repaymentService;
	
	@Autowired 
	RepaymentRepository repaymentRepository;
	
	@PostMapping( value= {"user/generateRepaymentSchedule", "admin/generateRepaymentSchedule"})
	public void addRepaymentModel(@RequestBody LoanModel loanModel) {
		repaymentService.addRepayment(loanModel);
	}
	
	@GetMapping("admin/getRepaymentSchedule/{Id}")
	public RepaymentModel getRepaymentModel(@PathVariable int Id) {
		return repaymentService.getRepaymentbyId(Id);
	}
	
	@PutMapping("user/editRepaymentSchedule/{Id}/{Payment}")
	public RepaymentModel updateRepaymentBypayment(@PathVariable int Id,@PathVariable float Payment) {
		return repaymentService.updateRepaymentByPayment(Id,Payment);
	}
	
    @DeleteMapping("user/deleteRepaymentSchedule/{id}")
    public ResponseEntity<HttpStatus> deleteRepaymentSchedule( @PathVariable Integer id){
    	RepaymentModel repaymentModel = repaymentRepository.findById(id).orElse(null);
      	repaymentRepository.delete(repaymentModel);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
