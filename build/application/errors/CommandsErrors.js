"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFound = exports.InvalidPassword = void 0;
const ApplicationError_1 = __importDefault(require("../../common/errors/ApplicationError"));
class InvalidPassword extends ApplicationError_1.default {
    constructor() {
        super('Senha incorreta.');
    }
}
exports.InvalidPassword = InvalidPassword;
class UserNotFound extends ApplicationError_1.default {
    constructor() {
        super('Usuário não encontrado.');
    }
}
exports.UserNotFound = UserNotFound;
