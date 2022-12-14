"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../../common/command/Command");
const ApplicationError_1 = __importDefault(require("../../../common/errors/ApplicationError"));
const CommandsErrors_1 = require("../../errors/CommandsErrors");
const DataAccessExceptions_1 = require("../../errors/DataAccessExceptions");
class ListAllProducts extends Command_1.Command {
    constructor(_productRepository) {
        super();
        this._productRepository = _productRepository;
    }
    execute() {
        try {
            return this._productRepository.getAllProducts();
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.ItemNotFoundException)
                return new CommandsErrors_1.UserNotFound();
            if (error instanceof DataAccessExceptions_1.DataAccessOperationException)
                return new ApplicationError_1.default("Ocorreu um erro durante a requisição de produtos. Por favor, tente novamente em instantes.", error.error);
            return new ApplicationError_1.default("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
}
exports.default = ListAllProducts;
