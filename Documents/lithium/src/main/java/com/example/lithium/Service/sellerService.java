package com.example.lithium.Service;

import com.example.lithium.Entity.Seller;

import java.util.List;

public interface sellerService {

    public List<Seller> consultarSeller();

    public Seller crearSeller(Seller seller);

    public Seller modificarSeller(Seller seller);

    public Seller buscarSeller(int id);

    public void eliminarSeller(int id);

}
