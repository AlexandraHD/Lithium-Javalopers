package com.example.lithium.Controller;

import com.example.lithium.Entity.PaymentMethod;
import com.example.lithium.Service.paymentMethodIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("CrudREPO")

public class paymentMethodController {

    @Autowired
    private paymentMethodIMPL paymentMethodimpl;

    @GetMapping

    @RequestMapping(value = "consultarPaymentMethod", method = RequestMethod.GET)
    public ResponseEntity<?> consultarPaymentMethod(){
        List<PaymentMethod> paymentMethodList=this.paymentMethodimpl.consultarPaymentMethod();
        return ResponseEntity.ok(paymentMethodList);
    }

    @PutMapping

    @RequestMapping(value = "crearPaymentMethod", method = RequestMethod.POST)
    public ResponseEntity<?> crearPaymentMethod(@RequestBody PaymentMethod paymentMethod){
        PaymentMethod paymentMethodCrear=this.paymentMethodimpl.crearPaymentMethod(paymentMethod);
        return ResponseEntity.status(HttpStatus.CREATED).body(paymentMethodCrear);
    }

    @PutMapping

    @RequestMapping(value = "modificarPaymentMethod", method = RequestMethod.GET)
    public ResponseEntity<?> modificarPaymentMethod(@RequestBody PaymentMethod paymentMethod){
        PaymentMethod paymentMethodModifiado=this.paymentMethodimpl.modificarPaymentMethod(paymentMethod);
        return ResponseEntity.status(HttpStatus.CREATED).body(paymentMethodModifiado);
    }

    @GetMapping

    @RequestMapping(value = "buscarPaymentMethod", method = RequestMethod.GET)
    public ResponseEntity<?> buscarPaymentMethod(@PathVariable int id){
        PaymentMethod paymentMethod=this.paymentMethodimpl.buscarPaymentMethod(id);
        return ResponseEntity.ok(paymentMethod);
    }

    @DeleteMapping

    @RequestMapping(value = "eliminarPaymentMethod", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarPaymentMethod(@PathVariable int id){
        this.paymentMethodimpl.eliminarPaymentMethod(id);
        return ResponseEntity.ok().build();
    }
}
