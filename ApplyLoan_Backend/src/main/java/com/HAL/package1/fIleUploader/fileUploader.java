package com.HAL.package1.fIleUploader;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;

//import java.io.IOException;
//import java.io.InputStream;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class fileUploader {
	
	//public final String UPLOAD_DIR="D:\\STSWork-Space\\HomeApplianceLoan\\src\\main\\resources\\static\\image";
	public final String UPLOAD_DIR=new ClassPathResource("static/image/").getFile().getAbsolutePath();
	
	public fileUploader() throws IOException
	{
		
	}
    
	public ResponseEntity<String> uploadFile(MultipartFile multipartFile) {
		
		try {
			Files.copy(multipartFile.getInputStream(),Paths.get(UPLOAD_DIR+File.separator+multipartFile.getOriginalFilename()),StandardCopyOption.REPLACE_EXISTING);
			
			System.out.println("uploaded");
			System.out.println(multipartFile.getOriginalFilename());
			/*
			 * InputStream is = multipartFile.getInputStream(); byte data[] = new
			 * byte[is.available()]; is.read(data);
			 */
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("not uploaded");
			e.printStackTrace();
		}
		return ResponseEntity.ok("Succcess");
	}
}
