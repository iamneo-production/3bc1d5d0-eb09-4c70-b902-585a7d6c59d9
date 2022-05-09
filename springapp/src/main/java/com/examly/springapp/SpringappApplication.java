package com.examly.springapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.examly.springapp.model.ERole;
import com.examly.springapp.model.Role;
import com.examly.springapp.repository.RoleRepository;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class SpringappApplication {

	@Autowired 
	RoleRepository roleRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

	@PostConstruct 
	public void addroles() {
		Role user = new Role(1,ERole.ROLE_USER);
		Role admin = new Role(2,ERole.ROLE_ADMIN);
		roleRepository.save(user);
		roleRepository.save(admin);
	}

}
