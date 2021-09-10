package com.ulasoftware.dashvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ulasoftware.dashvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
