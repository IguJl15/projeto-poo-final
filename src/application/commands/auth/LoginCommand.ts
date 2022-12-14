import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import IAdminRepository from "../../../contracts/repositories/IUsersRepository";
import Admin from "../../entities/Admin";
import { InvalidPassword, UserNotFound } from "../../errors/CommandsErrors";
import { DataAccessException, DataAccessOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";

type LoginCommandModel = {
    email: string;
    password: string;
}

class LoginCommand extends Command<LoginCommandModel, Admin> {

    constructor(loginInfo: LoginCommandModel, private readonly _adminRepository: IAdminRepository) {
        super(loginInfo);
    }

    public execute(): Admin | ApplicationError {
        try {
            const resultAdmin = this._adminRepository.getUserByEmail(this._parameters.email);

            if (resultAdmin.password != this._parameters.password) return new InvalidPassword();

            return resultAdmin as Admin;

        } catch (error) {
            if (error instanceof ItemNotFoundException) return new UserNotFound();
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante o processo de login. Por favor, tente novamente em instantes.",
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
}

export { LoginCommand, LoginCommandModel };