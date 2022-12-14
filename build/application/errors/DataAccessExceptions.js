"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccessOperationException = exports.ItemNotFoundException = exports.DataAccessException = void 0;
class DataAccessException {
}
exports.DataAccessException = DataAccessException;
class ItemNotFoundException {
    constructor(givenId) {
        this.givenId = givenId;
    }
}
exports.ItemNotFoundException = ItemNotFoundException;
class DataAccessOperationException {
    constructor(error) {
        this.error = error;
    }
}
exports.DataAccessOperationException = DataAccessOperationException;
