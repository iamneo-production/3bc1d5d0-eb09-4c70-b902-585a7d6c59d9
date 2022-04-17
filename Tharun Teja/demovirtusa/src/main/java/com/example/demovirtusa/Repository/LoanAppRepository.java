package com.example.demovirtusa.Repository;

import java.util.List;

import com.example.demovirtusa.Models.LoanApplication;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface LoanAppRepository extends JpaRepository<LoanApplication, Long> {

    @Query(name = "select * from loan_applications where status=:status",nativeQuery = true)
    public List<LoanApplication> findAllByStatus(@PathVariable(name = "status") String status);


    // @Modifying 
    // @Query(name = "select * from loan_applications where status!='null'",nativeQuery = true)
    // public List<LoanApplication> findDetailsByStatus(String status);

}
