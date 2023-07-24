package com.example.lithium.Entity;

import jakarta.persistence.*;

import javax.lang.model.element.Name;
import java.util.Date;

@Entity
@Table(name="payment_method")

public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_Payment_method")
    private int id;

    @Column(name = "expiration_Date")
    private Date expirationDate;

    @ManyToOne
    @JoinColumn(name = "user_idUser")
    private User user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
