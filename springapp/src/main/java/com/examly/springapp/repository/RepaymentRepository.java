package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.RepaymentModel;

@Repository
public interface RepaymentRepository extends JpaRepository < RepaymentModel ,Integer>{

}
