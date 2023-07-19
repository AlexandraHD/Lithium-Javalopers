package com.example.lithium.Repository;

import com.example.lithium.Entity.Seller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface sellerRepo extends CrudRepository<Seller, Integer> {
}
