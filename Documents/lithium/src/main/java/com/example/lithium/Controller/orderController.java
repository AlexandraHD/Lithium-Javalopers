package com.example.lithium.Controller;

import com.example.lithium.Entity.Order;
import com.example.lithium.Service.orderIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order")

public class orderController {

    @Autowired
    private orderIMPL orderimpl;

    @GetMapping

    @RequestMapping(value = "consultarOrder", method = RequestMethod.GET)
    public ResponseEntity<?> consultarOrder(){
        List<Order> orderList=this.orderimpl.consultarOrder();
        return ResponseEntity.ok(orderList);
    }

    @PutMapping

    @RequestMapping(value = "crearOrder", method = RequestMethod.POST)
    public ResponseEntity<?> crearOrder(@RequestBody Order order){
        Order orderCrear=this.orderimpl.crearOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(orderCrear);
    }

    @PutMapping

    @RequestMapping(value = "modificarOrder", method = RequestMethod.GET)
    public ResponseEntity<?> modificarOrder(@RequestBody Order order){
        Order ordermodificado=this.orderimpl.modificarOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(ordermodificado);
    }

    @GetMapping

    @RequestMapping(value = "buscarOrder", method = RequestMethod.GET)
    public ResponseEntity<?> buscarOrder(@PathVariable int id){
        Order order=this.orderimpl.buscarOrder(id);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping

    @RequestMapping(value = "eliminarOrder", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarOrder(@PathVariable int id){
        this.orderimpl.eliminarOrder(id);
        return ResponseEntity.ok().build();
    }
}
