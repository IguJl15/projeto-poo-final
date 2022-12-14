"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = require("../../../common/command/Command");
const ApplicationError_1 = __importDefault(require("../../../common/errors/ApplicationError"));
const DataAccessExceptions_1 = require("../../errors/DataAccessExceptions");
class RegisterCommand extends Command_1.Command {
    constructor(admin, _adminRepository) {
        super(admin);
        this._adminRepository = _adminRepository;
    }
    execute() {
        try {
            return this._adminRepository.saveUser(this._parameters);
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.DataAccessOperationException)
                return new ApplicationError_1.default("Ocorreu um erro durante o processo de registro. Por favor, tente novamente em instantes.", error.error);
            return new ApplicationError_1.default("Ocorreu um erro inesperado. Por favor, tente novamente em instantes.", `${error}`);
        }
    }
}
exports.default = RegisterCommand;
