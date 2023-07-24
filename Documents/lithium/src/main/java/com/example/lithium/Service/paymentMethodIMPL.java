package com.example.lithium.Service;

import com.example.lithium.Entity.PaymentMethod;
import com.example.lithium.Repository.paymentMethodRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class paymentMethodIMPL implements paymentMethodService {

    @Autowired
    private paymentMethodRepo repo;

    @Override
    public List<PaymentMethod> consultarPaymentMethod(){
        return (List<PaymentMethod>) this.repo.findAll();
    }

    @Override
    public PaymentMethod crearPaymentMethod(PaymentMethod paymentMethod){
        paymentMethod.setExpirationDate(paymentMethod.getExpirationDate());
        return this.repo.save(paymentMethod);
    }

    @Override
    public PaymentMethod modificarPaymentMethod(PaymentMethod paymentMethod){
        return this.repo.save(paymentMethod);
    }

    @Override
    public PaymentMethod buscarPaymentMethod(int id){
        return this.repo.findById(id).get();
    }

   @Override
    public void eliminarPaymentMethod(int id){
        this.repo.deleteById(id);
   }


}
