"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DigitalProduct {
    constructor(id, ownerId, name, description, value, category, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.ownerId = ownerId;
        this.name = name;
        this.description = description;
        this.value = value;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.default = DigitalProduct;
