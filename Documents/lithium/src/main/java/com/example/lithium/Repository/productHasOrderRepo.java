package com.example.lithium.Repository;

import com.example.lithium.Entity.ProductHasOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface productHasOrderRepo extends CrudRepository<ProductHasOrder, Integer> {
}
