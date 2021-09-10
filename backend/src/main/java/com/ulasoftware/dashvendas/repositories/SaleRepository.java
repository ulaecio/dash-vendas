package com.ulasoftware.dashvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ulasoftware.dashvendas.dto.SaleSuccessDTO;
import com.ulasoftware.dashvendas.dto.SaleSumDTO;
import com.ulasoftware.dashvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.ulasoftware.dashvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller" )
	List<SaleSumDTO> amountGroupBySeller();

	@Query("SELECT new com.ulasoftware.dashvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller" )
	List<SaleSuccessDTO> successGroupBySeller();
}
