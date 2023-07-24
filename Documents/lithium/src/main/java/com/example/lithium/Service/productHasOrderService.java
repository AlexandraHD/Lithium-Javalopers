package com.example.lithium.Service;

import com.example.lithium.Entity.ProductHasOrder;

import java.util.List;

public interface productHasOrderService {

    public List<ProductHasOrder> consultarProductHasOrder();

    public ProductHasOrder crearProductHasOrder(ProductHasOrder productHasOrder);

    public ProductHasOrder modificarProductHasOrder(ProductHasOrder productHasOrder);

    public ProductHasOrder buscarProductHasOrder(int id);

    public void eliminarProductHasOrder(int id);
}
