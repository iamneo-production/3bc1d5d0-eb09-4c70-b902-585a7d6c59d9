package com.example.demovirtusa.Controller;

import java.util.List;

import com.example.demovirtusa.AuthenticationBean;
import com.example.demovirtusa.Models.User;
import com.example.demovirtusa.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @Autowired
    private UserService service;

    @GetMapping(path="/admin/login")
	public AuthenticationBean basicauth(){
		return new  AuthenticationBean("you have been authenticated");
	}

    @PostMapping("/admin/addUser")
    public User addUser(@RequestBody User user) {
        return service.saveUser(user);
    }

    @GetMapping("/admin/getAllUsers")
    public List<User> findAllUser() {
        return service.getUsers();
    }

    @GetMapping("/admin/getUser/{userid}")
    public User findUserById(@PathVariable Long userid) {
        return service.getUserById(userid);
    }

}
