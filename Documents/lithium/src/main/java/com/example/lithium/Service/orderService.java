package com.example.lithium.Service;

import com.example.lithium.Entity.Order;

import java.util.List;

public interface orderService {

    public List<Order> consultarOrder();

    public Order crearOrder(Order order);

    public Order modificarOrder(Order order);

    public Order buscarOrder(int id);

    public void eliminarOrder(int id);
}
