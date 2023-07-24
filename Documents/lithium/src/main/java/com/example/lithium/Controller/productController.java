package com.example.lithium.Controller;

import com.example.lithium.Entity.Product;
import com.example.lithium.Service.productIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("product")

public class productController {

    @Autowired
    private productIMPL productimpl;

    @GetMapping

    //http:localhost:8080/product/consultarProduct
    @RequestMapping(value = "consultarProduct", method = RequestMethod.GET)
        public ResponseEntity<?> consultarProduct(){
        List<Product> productList=this.productimpl.consultarProduct();
        return ResponseEntity.ok(productList);
    }

    @PutMapping

    @RequestMapping(value = "crearProduct", method = RequestMethod.POST)
        public ResponseEntity<?> crearProduct (@RequestBody Product product){
        Product productCrear=this.productimpl.crearProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productCrear);
    }
    @GetMapping
    @RequestMapping(value = "modificarProduct", method = RequestMethod.GET)
        public ResponseEntity<?> modificarProduct (@RequestBody Product product){
        Product productModificado=this.productimpl.modificarProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productModificado);
    }

    @GetMapping

    @RequestMapping(value = "buscarProduct", method = RequestMethod.GET)
        public ResponseEntity<?> buscarProduct (@PathVariable int id){
        Product product=this.productimpl.buscarProduct(id);
        return ResponseEntity.ok(product);
    }

    @DeleteMapping

    @RequestMapping(value = "eliminarProduct", method = RequestMethod.DELETE)
        public ResponseEntity<?> eliminarProduct(@PathVariable int id){
        this.productimpl.eliminarProduct(id);
        return ResponseEntity.ok().build();
    }
}
