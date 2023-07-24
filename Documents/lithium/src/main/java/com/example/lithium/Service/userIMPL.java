package com.example.lithium.Service;

import com.example.lithium.Entity.User;
import com.example.lithium.Repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class userIMPL implements userService {

    @Autowired
    private userRepo repo;

    @Override
    public List<User> consultarUser(){
    return(List<User>) this.repo.findAll();
    }

    @Override
    public User crearUser(User user){
    user.setEmailUser(user.getEmailUser());
    return this.repo.save(user);
    }

    @Override
    public User modificarUser(User user){
        return this.repo.save(user);
    }

    @Override
    public User buscarUser(int id){
    return this.repo.findById(id).get();
    }

    @Override
    public void eliminarUser(int id){
    this.repo.deleteById(id);
    }

}

