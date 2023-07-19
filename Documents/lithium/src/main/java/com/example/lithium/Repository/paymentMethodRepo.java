package com.example.lithium.Repository;

import com.example.lithium.Entity.PaymentMethod;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface paymentMethodRepo extends CrudRepository<PaymentMethod, Integer> {
}
