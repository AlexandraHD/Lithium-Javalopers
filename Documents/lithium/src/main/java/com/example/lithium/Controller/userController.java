package com.example.lithium.Controller;

import com.example.lithium.Service.userIMPL;
import com.example.lithium.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("CrudRepo")

public class userController {

    @Autowired
    private userIMPL userimpl;

    @GetMapping
    //http:localhost:8080/CrudRepo/consultarUser
    @RequestMapping(value = "consultarUser", method = RequestMethod.GET)
    public ResponseEntity<?> consultarUser(){
        List<User> userList=this.userimpl.consultarUser();
        return ResponseEntity.ok(userList);
    }

    @PutMapping
    @RequestMapping(value = "crearUser", method = RequestMethod.POST)
    public ResponseEntity<?> crearUser(@RequestBody User user){
    User userCrear=this.userimpl.crearUser(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(userCrear);
    }

    @PutMapping
    @RequestMapping(value = "modificarUser", method = RequestMethod.PUT)
    public ResponseEntity<?> modificarUser(@RequestBody User user){
        User userModifiado=this.userimpl.modificarUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userModifiado);
    }

    @GetMapping
    //http:localhost:8080/CrudRepo/buscarUser
    @RequestMapping(value = "buscarUser/id", method = RequestMethod.GET)
    public ResponseEntity<?> buscarUser(@PathVariable int id){
        User user=this.userimpl.buscarUser(id);
        return ResponseEntity.ok(user);
    }
    @DeleteMapping
    @RequestMapping(value = "eliminarUser/id", method = RequestMethod.DELETE)
    public ResponseEntity<?> eliminarUser(@PathVariable int id){
        this.userimpl.eliminarUser(id);
        return ResponseEntity.ok().build();
    }

}
