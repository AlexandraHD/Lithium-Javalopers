package com.example.lithium.Service;

import com.example.lithium.Entity.Order;
import com.example.lithium.Repository.orderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class orderIMPL implements orderService {

    @Autowired
    private orderRepo repo;


    @Override
    public List<Order> consultarOrder(){
        return (List<Order>) this.repo.findAll();
    }

    @Override
    public Order crearOrder(Order order){
        order.setIdOrder(order.getIdOrder());
        return this.repo.save(order);
    }

    @Override
    public  Order modificarOrder(Order order){
        return this.repo.save(order);
    }

    @Override
    public Order buscarOrder(int id){
        return this.repo.findById(id).get();
    }

    @Override
    public void eliminarOrder(int id){
        this.repo.deleteById(id);
    }



}
