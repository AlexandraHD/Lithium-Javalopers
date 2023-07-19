package com.example.lithium.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product_has_order")

public class ProductHasOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id_product_has_order")
    private int idProductHasOrder;

    @ManyToOne
    @JoinColumn(name = "product_id_Product", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id_Order", nullable = false)
    private Order order;

    public int getIdProductHasOrder() {
        return idProductHasOrder;
    }

    public void setIdProductHasOrder(int idProductHasOrder) {
        this.idProductHasOrder = idProductHasOrder;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
