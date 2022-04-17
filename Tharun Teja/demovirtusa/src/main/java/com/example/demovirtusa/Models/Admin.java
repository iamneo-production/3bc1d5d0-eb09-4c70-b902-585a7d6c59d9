package com.example.demovirtusa.Models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
    
    @Id
    private Long adminId;
    private String username;
    private String email;
    private String password;
    private String mobileNumber;
     
    public Admin() {

    }

    public Admin(String email, String password, String mobileNumber, String username) {
        this.username=username;
        this.email = email;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }


    

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    
    
}
