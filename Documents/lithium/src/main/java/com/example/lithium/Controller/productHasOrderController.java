package com.example.lithium.Controller;

import com.example.lithium.Entity.ProductHasOrder;
import com.example.lithium.Service.productHasOrderIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("productHas")

public class productHasOrderController {

    @Autowired
    private productHasOrderIMPL productHasOrderimpl;

    @GetMapping

    @RequestMapping(value = "consultarProductHasOrder", method = RequestMethod.GET)
        public ResponseEntity<?> consultarProductOrder(){
        List<ProductHasOrder> productHasOrderList=this.productHasOrderimpl.consultarProductHasOrder();
        return ResponseEntity.ok(productHasOrderList);
    }

    @PutMapping

    @RequestMapping(value = "crearProductHasOrder", method = RequestMethod.POST)
        public ResponseEntity<?> crearProductHasOrder(@RequestBody ProductHasOrder productHasOrder){
        ProductHasOrder productHasOrderCrear=this.productHasOrderimpl.crearProductHasOrder(productHasOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(productHasOrderCrear);
    }

    @PutMapping

    @RequestMapping(value = "modificarProductHasOrder", method = RequestMethod.GET)
        public ResponseEntity<?> modificarProductHasOrder(@RequestBody ProductHasOrder productHasOrder){
        ProductHasOrder productHasOrderModificado=this.productHasOrderimpl.modificarProductHasOrder(productHasOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(productHasOrderModificado);
    }

    @GetMapping

    @RequestMapping(value = "buscarProductHasOrder", method = RequestMethod.GET)
        public ResponseEntity<?> buscarProductHasOrder(@PathVariable int id){
        ProductHasOrder productHasOrder=this.productHasOrderimpl.buscarProductHasOrder(id);
        return ResponseEntity.ok(productHasOrder);
    }

    @DeleteMapping

    @RequestMapping(value = "eliminarProductHasOrder", method = RequestMethod.DELETE)
        public ResponseEntity<?> eliminarProductHasOrder(@PathVariable int id){
        this.productHasOrderimpl.eliminarProductHasOrder(id);
        return ResponseEntity.ok().build();
    }

}
