"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(id, name, email, password, products, created_at, updatedAt, deletedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.products = products;
        this.created_at = created_at;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.default = Admin;
