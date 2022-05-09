package com.examly.springapp.fileUploader;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploader {
	
	
	public final String UPLOAD_DIR = new ClassPathResource("static/image/").getFile().getAbsolutePath();
	
//	public final String UPLOAD_DIR = "C:\\Users\\tirth\\Desktop\\VIRTUSA PROJECT\\HomeApplianceLoanApplication\\Backend\\halapplicationbackend\\src\\main\\resources\\static\\image";
	
	public FileUploader() throws IOException
	{
		
	}
    
	public ResponseEntity<String> uploadFile(MultipartFile multipartFile) {
		
		try {
			System.out.println(UPLOAD_DIR);
		Files.copy(multipartFile.getInputStream(),Paths.get(UPLOAD_DIR+File.separator+multipartFile.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
		

		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("not uploaded");
			e.printStackTrace();
		}
		return ResponseEntity.ok("Succcess");
	}
}
class FileUploader {
    
}
