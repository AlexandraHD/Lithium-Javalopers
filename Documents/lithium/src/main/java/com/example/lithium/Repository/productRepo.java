package com.example.lithium.Repository;

import com.example.lithium.Entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface productRepo extends CrudRepository<Product, Integer> {

}
