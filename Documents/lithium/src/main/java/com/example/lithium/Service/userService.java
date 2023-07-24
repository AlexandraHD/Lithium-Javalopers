package com.example.lithium.Service;

import com.example.lithium.Entity.User;

import java.util.List;

public interface userService {

    public List<User> consultarUser();

    public User crearUser(User user);

    public User modificarUser(User user);

    public User buscarUser(int id);

    public void eliminarUser(int id);
}
