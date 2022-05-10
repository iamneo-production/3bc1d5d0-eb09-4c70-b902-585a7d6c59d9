package com.examly.springapp.repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import com.examly.springapp.model.LoanModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface LoanRepository extends JpaRepository < LoanModel ,Integer>{
	
	@Query(name = "select * from loan_applications where status=:status",nativeQuery = true)
    public java.util.List<LoanModel> findAllByStatus(@PathVariable(name = "status") String status);
}



