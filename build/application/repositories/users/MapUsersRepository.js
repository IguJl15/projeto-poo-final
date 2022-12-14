"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccessExceptions_1 = require("../../errors/DataAccessExceptions");
class MapUsersRepository {
    constructor() {
        this._users = new Map();
    }
    saveUser(user) {
        try {
            const id = user.id;
            this._users.set(id, user);
            if (!this._users.has(id))
                throw new DataAccessExceptions_1.ItemNotFoundException(id);
            return id;
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessException)
                throw error;
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a operação de inserção no banco de dados: ${error}`);
        }
    }
    getUserByEmail(email) {
        throw new Error("Method not implemented.");
    }
    deleteById(id) {
        try {
            if (!this._users.has(id))
                throw new DataAccessExceptions_1.ItemNotFoundException(id);
            return this._users.delete(id);
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessException)
                throw error;
            throw new DataAccessExceptions_1.DataAccessOperationException(`Error durante a operação de deleção no banco de dados: ${error}`);
        }
    }
}
exports.default = MapUsersRepository;
