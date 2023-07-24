package com.example.lithium.Repository;

import com.example.lithium.Entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface userRepo extends CrudRepository<User, Integer> {

}
