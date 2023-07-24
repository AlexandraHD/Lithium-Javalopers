package com.example.lithium.Service;

import com.example.lithium.Entity.Product;
import com.example.lithium.Repository.productRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class productIMPL implements productService {

    @Autowired
    private productRepo repo;

    @Override
    public List<Product> consultarProduct(){
        return (List<Product>) this.repo.findAll();
    }

    @Override
    public Product crearProduct(Product product){
        product.setNameProduct(product.getNameProduct());
        return this.repo.save(product);
    }

    @Override
    public Product modificarProduct(Product product){
        return this.repo.save(product);
    }

    @Override
    public Product buscarProduct(int id){
        return this.repo.findById(id).get();
    }

    @Override
    public void eliminarProduct(int id){
        this.repo.deleteById(id);
    }
}
