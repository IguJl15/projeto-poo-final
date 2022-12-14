"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCommand = void 0;
const Command_1 = require("../../../common/command/Command");
const ApplicationError_1 = __importDefault(require("../../../common/errors/ApplicationError"));
const CommandsErrors_1 = require("../../errors/CommandsErrors");
const DataAccessExceptions_1 = require("../../errors/DataAccessExceptions");
class LoginCommand extends Command_1.Command {
    constructor(loginInfo, _adminRepository) {
        super(loginInfo);
        this._adminRepository = _adminRepository;
    }
    execute() {
        try {
            const resultAdmin = this._adminRepository.getUserByEmail(this._parameters.email);
            if (resultAdmin.password != this._parameters.password)
                return new CommandsErrors_1.InvalidPassword();
            return resultAdmin;
        }
        catch (error) {
            if (error instanceof DataAccessExceptions_1.ItemNotFoundException)
                return new CommandsErrors_1.UserNotFound();
            if (error instanceof DataAccessExceptions_1.DataAccessOperationException)
                return new ApplicationError_1.default("Ocorreu um erro durante o processo de login. Por favor, tente novamente em instantes.", error.error);
            return new ApplicationError_1.default("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
}
exports.LoginCommand = LoginCommand;
