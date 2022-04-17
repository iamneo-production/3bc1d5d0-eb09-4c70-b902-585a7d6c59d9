package com.example.demovirtusa.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="LoanApplications")
public class LoanApplication {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loanId;
    private String name;
    private String phone;
    private String email;
    private String aadhar_no;
    private String pan_no;
    private String salary;
    private String loanAmountRequired;
    private String loanRepaymentMonths;
    private String status;
    private String reasonForRejection;


    // @ManyToOne(fetch = FetchType.LAZY, optional = false)
    // @JoinColumn(name = "userId", nullable = false)
    // private User user;

    public LoanApplication() {

    }


    public LoanApplication(String name, String phone, String email, String aadhar_no, String pan_no, String salary,
            String loanAmountRequired, String loanRepaymentMonths, String status, String reasonForRejection ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.aadhar_no = aadhar_no;
        this.pan_no = pan_no;
        this.salary = salary;
        this.loanAmountRequired = loanAmountRequired;
        this.loanRepaymentMonths = loanRepaymentMonths;
        this.status = status;
        this.reasonForRejection=reasonForRejection;
    }


    public Long getLoanId() {
        return loanId;
    }


    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getAadhar_no() {
        return aadhar_no;
    }


    public void setAadhar_no(String aadhar_no) {
        this.aadhar_no = aadhar_no;
    }


    public String getPan_no() {
        return pan_no;
    }


    public void setPan_no(String pan_no) {
        this.pan_no = pan_no;
    }


    public String getSalary() {
        return salary;
    }


    public void setSalary(String salary) {
        this.salary = salary;
    }


    public String getLoanAmountRequired() {
        return loanAmountRequired;
    }


    public void setLoanAmountRequired(String loanAmountRequired) {
        this.loanAmountRequired = loanAmountRequired;
    }


    public String getLoanRepaymentMonths() {
        return loanRepaymentMonths;
    }


    public void setLoanRepaymentMonths(String loanRepaymentMonths) {
        this.loanRepaymentMonths = loanRepaymentMonths;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }


    public String getReasonForRejection() {
        return reasonForRejection;
    }


    public void setReasonForRejection(String reasonForRejection) {
        this.reasonForRejection = reasonForRejection;
    }    

}
