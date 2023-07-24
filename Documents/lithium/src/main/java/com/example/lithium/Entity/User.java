package com.example.lithium.Entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "user")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_User")
    private int idUser;

    @Column(name = "name_User")
    private String nameUser;

    @Column(name = "email_User")
    private String emailUser;

    @Column(name = "address_User")
    private String addressUser;

    @Column(name = "phone_User")
    private String phoneUser;

    @Column(name = "password_User")
    private String passwordUser;

    @Column(name = "image_User")
    private String imageUser;

    @Column(name = "reg_Date_User")
    @CreationTimestamp
    private Date regDateUser;

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getAddressUser() {
        return addressUser;
    }

    public void setAddressUser(String addressUser) {
        this.addressUser = addressUser;
    }

    public String getPhoneUser() {
        return phoneUser;
    }

    public void setPhoneUser(String phoneUser) {
        this.phoneUser = phoneUser;
    }

    public String getPasswordUser() {
        return passwordUser;
    }

    public void setPasswordUser(String passwordUser) {
        this.passwordUser = passwordUser;
    }

    public String getImageUser() {
        return imageUser;
    }

    public void setImageUser(String imageUser) {
        this.imageUser = imageUser;
    }

    public Date getRegDateUser() {
        return regDateUser;
    }

    public void setRegDateUser(Date regDateUser) {
        this.regDateUser = regDateUser;
    }
}
