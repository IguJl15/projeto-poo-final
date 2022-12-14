"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, ownerId, name, description, value, brand, category, quantity, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.ownerId = ownerId;
        this.name = name;
        this.description = description;
        this.value = value;
        this.brand = brand;
        this.category = category;
        this.quantity = quantity;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.default = Product;
