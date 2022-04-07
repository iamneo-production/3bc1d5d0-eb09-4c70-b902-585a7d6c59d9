package com.HAL.package1.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.HAL.package1.entities.DocumentModel;
import com.HAL.package1.entities.LoanApplicationModel;
import com.HAL.package1.fIleUploader.fileUploader;
import com.HAL.package1.service.Loanservice;

import java.util.*;

@CrossOrigin
@RequestMapping("/user")
@RestController
public class halController {
	
	//@Autowired
	//private LoanApplicationModel loanapplicationmodel;
	
	@Autowired
	private DocumentModel documentmodel;
	
	@Autowired
	private Loanservice loanservice;
	@Autowired
	private fileUploader fileuploader;
	@GetMapping("/allloans")
	 public List<LoanApplicationModel> findAllLoanApplicationModel(){
		 return this.loanservice.getLoanApplicationsModel();
	 }
	
	@PostMapping("/addLoan")
	public LoanApplicationModel addLoan(@RequestBody LoanApplicationModel loanapplicationmodel) {
	return this.loanservice.addLoan(loanapplicationmodel);
	}
	
	@PostMapping("/adddocs")
	public DocumentModel adddocs(@RequestParam("docs") MultipartFile[] docs) {
		int count = 0;
		
		//System.out.println( loanapplicationmodel.getLoanAmountRequired());
		for(MultipartFile file : docs) {
			count = count+ 1;
			if (count == 1){
			fileuploader.uploadFile(file);
			documentmodel.setAadhar(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
			//System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
		}
			else if (count == 2){
				fileuploader.uploadFile(file);
				documentmodel.setPan(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());				//System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
				}
			else if (count == 3){
				fileuploader.uploadFile(file);
				documentmodel.setBankStatements(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
				//System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
				}
			if (count == 4){
				fileuploader.uploadFile(file);
				documentmodel.setPaySlip(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
				//System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
				}
		
			//ResponseEntity<String> s = fileuploader.uploadFile(file);
			//System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
			//System.out.println(s);
		}
		return this.loanservice.addDocuments(documentmodel) ;
	}

}
