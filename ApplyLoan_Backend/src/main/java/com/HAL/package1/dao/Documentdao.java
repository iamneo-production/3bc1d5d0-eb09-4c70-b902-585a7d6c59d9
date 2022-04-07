package com.HAL.package1.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.HAL.package1.entities.DocumentModel;


@Repository
public interface Documentdao extends JpaRepository<DocumentModel,Integer> {

}

