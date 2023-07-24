package com.example.lithium.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order")

public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_Order")
    private String idOrder;

    @ManyToOne
    @JoinColumn(name = "user_id_User")
    private User user;

    @ManyToOne
    @JoinColumn(name = "seller_id_Seller")
    private Seller seller;

    public String getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(String idOrder) {
        this.idOrder = idOrder;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }
}
