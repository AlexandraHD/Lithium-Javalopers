package com.example.lithium.Service;

import com.example.lithium.Entity.ProductHasOrder;
import com.example.lithium.Repository.productHasOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class productHasOrderIMPL implements productHasOrderService {

    @Autowired
    private productHasOrderRepo repo;

    @Override
    public List<ProductHasOrder> consultarProductHasOrder() {
        return (List<ProductHasOrder>) this.repo.findAll();
    }

    @Override
    public ProductHasOrder crearProductHasOrder(ProductHasOrder productHasOrder) {
        productHasOrder.setIdProductHasOrder(productHasOrder.getIdProductHasOrder());
        return this.repo.save(productHasOrder);
    }

    @Override
    public ProductHasOrder modificarProductHasOrder(ProductHasOrder productHasOrder) {
        return this.repo.save(productHasOrder);
    }

    @Override
    public ProductHasOrder buscarProductHasOrder(int id) {
        return this.repo.findById(id).get();
    }

    @Override
    public void eliminarProductHasOrder(int id) {
        this.repo.deleteById(id);

    }
}
