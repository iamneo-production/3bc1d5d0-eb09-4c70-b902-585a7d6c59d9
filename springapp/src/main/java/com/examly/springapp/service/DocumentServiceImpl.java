package com.examly.springapp.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.repository.DocumentRepository;
import com.examly.springapp.repository.LoanRepository;

@Service
public class DocumentServiceImpl implements DocumentService {
	
	@Autowired
	DocumentRepository documentRepository;

	@Override
	public DocumentModel getDocumentsbyid(int documentId) {     
		List<DocumentModel> list = documentRepository.findAll();
		DocumentModel documentModel = null;
		for(DocumentModel documents:list)
		{
			if(documents.getDocumentId()==documentId)
			{
				documentModel=documents;
				break;
			}
		}
		return documentModel;
	}

}
