package com.examly.springapp.controller;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.examly.springapp.fileUploader.FileUploader;
import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.repository.DocumentRepository;
import com.examly.springapp.service.DocumentService;


//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController 	
@RequestMapping("/")
public class DocumentController {

	@Autowired
	DocumentService documentService;
	
	@Autowired
	DocumentRepository documentRepository;           
	
	@Autowired
    private FileUploader fileuploader;
	
	//For admin side fetching (check details)
	@GetMapping("user/getDocuments/{documentId}")
	public DocumentModel getDocumentsbyid(@PathVariable int documentId) {
		return this.documentService.getDocumentsbyid(documentId);
	}
	
	
	//for uploading documents
	@PostMapping("user/addDocuments")
	public DocumentModel adddocuments(@RequestParam("docs") MultipartFile[] docs) {
		
		int count = 0;
		DocumentModel documentmodel = new DocumentModel();
		
		for(MultipartFile file : docs) {
			count = count+ 1;
			
			
			if (count == 1){
               fileuploader.uploadFile(file);
			documentmodel.setAadhar(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
			}
		    else if (count == 2){
			fileuploader.uploadFile(file);
				documentmodel.setPan(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());				
				}
			else if (count == 3){
				fileuploader.uploadFile(file);
			documentmodel.setBankStatement(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
			}
			else if (count == 4){
			fileuploader.uploadFile(file);
			documentmodel.setPaySlip(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
		}
		
			
		}
		return documentRepository.save(documentmodel); 
	}

	
	@DeleteMapping("user/deletedocuments/{id}")
    public ResponseEntity<HttpStatus> deleteLoanApplication( @PathVariable Integer id){
    	DocumentModel documentModel = documentRepository.findById(id).orElse(null);
    	documentRepository.delete(documentModel);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
	
}          
