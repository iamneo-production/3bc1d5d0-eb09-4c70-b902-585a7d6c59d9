package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.User;


public interface UserService {
	
	public List<User> getAllUsers();
	public User getUser(Long id);
}
