package com.example.lithium.Entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "seller")

public class Seller {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_Seller")
    private int idSeller;

    @Column(name = "name_Seller")
    private String nameSeller;

    @Column(name = "activity_Seller")
    private String activitySeller;

    @Column(name = "address_Seller")
    private String addressSeller;

    @Column(name = "email_Seller")
    private String emailSeller;

    @Column(name = "phone_Seller")
    private String phoneSeller;

    @Column(name = "password_Seller")
    private String passwordSeller;

    @Column(name = "reg_Date_Seller")
    @CreationTimestamp
    private Date regDateSeller;

    @Column(name = "image_Company")
    private String imageSeller;

    public int getIdSeller() {
        return idSeller;
    }

    public void setIdSeller(int idSeller) {
        this.idSeller = idSeller;
    }

    public String getNameSeller() {
        return nameSeller;
    }

    public void setNameSeller(String nameSeller) {
        this.nameSeller = nameSeller;
    }

    public String getActivitySeller() {
        return activitySeller;
    }

    public void setActivitySeller(String activitySeller) {
        this.activitySeller = activitySeller;
    }

    public String getAddressSeller() {
        return addressSeller;
    }

    public void setAddressSeller(String addressSeller) {
        this.addressSeller = addressSeller;
    }

    public String getEmailSeller() {
        return emailSeller;
    }

    public void setEmailSeller(String emailSeller) {
        this.emailSeller = emailSeller;
    }

    public String getPhoneSeller() {
        return phoneSeller;
    }

    public void setPhoneSeller(String phoneSeller) {
        this.phoneSeller = phoneSeller;
    }

    public String getPasswordSeller() {
        return passwordSeller;
    }

    public void setPasswordSeller(String passwordSeller) {
        this.passwordSeller = passwordSeller;
    }

    public String getImageSeller() {
        return imageSeller;
    }

    public void setImageSeller(String imageSeller) {
        this.imageSeller = imageSeller;
    }

    public Date getRegDateSeller() {
        return regDateSeller;
    }

    public void setRegDateSeller(Date regDateSeller) {
        this.regDateSeller = regDateSeller;
    }


}
