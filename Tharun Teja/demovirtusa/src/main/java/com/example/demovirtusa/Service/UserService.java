package com.example.demovirtusa.Service;

import java.util.List;

import com.example.demovirtusa.Models.User;
import com.example.demovirtusa.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepository repository;

    public User saveUser(User user) {
        return repository.save(user);
    }

    public List<User> getUsers() {
        return repository.findAll();
    }

    public User getUserById(Long userid) {
        return repository.findById(userid).orElse(null);
    }

}
