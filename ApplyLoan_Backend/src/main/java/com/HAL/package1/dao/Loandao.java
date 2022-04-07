package com.HAL.package1.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.HAL.package1.entities.LoanApplicationModel;


@Repository
public interface Loandao extends JpaRepository<LoanApplicationModel,Integer> {



}

