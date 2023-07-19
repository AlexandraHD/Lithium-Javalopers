package com.example.lithium.Controller;

import com.example.lithium.Entity.Seller;
import com.example.lithium.Service.sellerIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("CrudRepo")

public class sellerController {

    @Autowired
    private sellerIMPL sellerimpl;

    @GetMapping

    //http:localhost:8080/CrudRepo/consultarSeller
    @RequestMapping(value = "consultarSeller", method = RequestMethod.GET)
        public ResponseEntity<?> consultarSeller(){
        List<Seller> sellerList=this.sellerimpl.consultarSeller();
        return ResponseEntity.ok(sellerList);
    }

    @PutMapping

    @RequestMapping(value = "crearSeller", method = RequestMethod.POST)
        public ResponseEntity<?> crearSeller(@RequestBody Seller seller){
        Seller sellerCrear=this.sellerimpl.crearSeller(seller);
        return ResponseEntity.status(HttpStatus.CREATED).body(sellerCrear);
    }

    @PutMapping

    @RequestMapping(value = "modificarSeller", method = RequestMethod.PUT)
        public ResponseEntity<?> modificarSeller(@RequestBody Seller seller){
        Seller sellerModificado=this.sellerimpl.modificarSeller(seller);
        return ResponseEntity.status(HttpStatus.CREATED).body(sellerModificado);
    }

    @GetMapping

    @RequestMapping(value = "buscarSeller", method = RequestMethod.GET)
        public ResponseEntity<?> buscarSeller(@PathVariable int id){
        Seller seller=this.sellerimpl.buscarSeller(id);
        return ResponseEntity.ok(seller);
    }

    @DeleteMapping
    @RequestMapping(value = "eliminarSeller", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarSeller(@PathVariable int id) {
        this.sellerimpl.eliminarSeller(id);
        return ResponseEntity.ok().build();
    }
}
