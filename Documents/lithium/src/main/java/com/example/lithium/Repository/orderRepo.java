package com.example.lithium.Repository;

import com.example.lithium.Entity.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface orderRepo extends CrudRepository<Order, Integer> {

}
