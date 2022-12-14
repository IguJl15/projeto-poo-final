"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApplicationError {
    constructor(message, details) {
        this.message = message;
        this.details = details;
    }
}
exports.default = ApplicationError;
