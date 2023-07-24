package com.example.lithium.Service;

import com.example.lithium.Entity.Seller;
import com.example.lithium.Repository.sellerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class sellerIMPL implements sellerService {

    @Autowired
    private sellerRepo repo;

    @Override
    public List<Seller> consultarSeller() {
        return(List<Seller>) this.repo.findAll();
    }

    @Override
    public Seller crearSeller(Seller seller){
        seller.setEmailSeller(seller.getEmailSeller());
        return this.repo.save(seller);
    }

    @Override
    public Seller modificarSeller(Seller seller){
        return this.repo.save(seller);
    }

    @Override
    public Seller buscarSeller(int id){
        return this.repo.findById(id).get();
    }

    @Override
    public void eliminarSeller(int id){
        this.repo.deleteById(id);
    }
}
