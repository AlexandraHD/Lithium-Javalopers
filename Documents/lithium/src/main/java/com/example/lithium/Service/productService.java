package com.example.lithium.Service;

import com.example.lithium.Entity.Product;

import java.util.List;

public interface productService {

    public List<Product> consultarProduct();

    public Product crearProduct(Product product);

    public Product modificarProduct(Product product);

    public Product buscarProduct(int id);

    public void eliminarProduct(int id);
}
