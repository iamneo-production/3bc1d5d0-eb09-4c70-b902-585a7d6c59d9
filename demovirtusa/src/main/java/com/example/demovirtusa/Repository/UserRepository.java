package com.example.demovirtusa.Repository;

import com.example.demovirtusa.Models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    
    User findByUsername(String username);
  
}
