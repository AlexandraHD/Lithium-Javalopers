package com.example.lithium.Service;

import com.example.lithium.Entity.PaymentMethod;

import java.util.List;

public interface paymentMethodService {

    public List<PaymentMethod> consultarPaymentMethod();

    public PaymentMethod crearPaymentMethod(PaymentMethod paymentMethod);

    public PaymentMethod modificarPaymentMethod(PaymentMethod paymentMethod);

    public PaymentMethod buscarPaymentMethod(int id);

    public void eliminarPaymentMethod(int id);
}
