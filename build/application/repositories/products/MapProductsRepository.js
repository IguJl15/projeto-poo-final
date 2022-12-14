"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccessExceptions_1 = require("../../errors/DataAccessExceptions");
class MapProductsRepository {
    constructor() {
        this._products = new Map();
    }
    saveProduct(product) {
        try {
            const id = product.id;
            this._products.set(id, product);
            if (!this._products.has(id))
                throw new DataAccessExceptions_1.ItemNotFoundException(id);
            return id;
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessException)
                throw error;
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a operação de inserção no banco de dados: ${error}`);
        }
    }
    saveProducts(products) {
        const list = [];
        for (const item of products) {
            const id = this.saveProduct(item);
            list.push(id);
        }
        return list;
    }
    getProductsByOwnerId(id) {
        try {
            const list = [];
            for (const item of this._products.values()) {
                if (item.ownerId === id)
                    list.push(item);
            }
            if (list.length === 0)
                throw new DataAccessExceptions_1.ItemNotFoundException(id);
            return list;
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessException)
                throw error;
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
    }
    getAllProducts() {
        try {
            const list = [];
            for (const item of this._products.values()) {
                list.push(item);
            }
            return list;
        }
        catch (error) {
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
    }
    deleteById(id) {
        try {
            if (!this._products.has(id))
                throw new DataAccessExceptions_1.ItemNotFoundException(id);
            return this._products.delete(id);
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessException)
                throw error;
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a operação de deleção no banco de dados: ${error}`);
        }
    }
}
exports.default = MapProductsRepository;
