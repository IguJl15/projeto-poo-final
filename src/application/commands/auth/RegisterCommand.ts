import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import IAdminRepository from "../../../contracts/repositories/IUsersRepository";
import Admin from "../../entities/Admin";
import { DataAccessException, DataAccessOperationException } from "../../errors/DataAccessExceptions";

class RegisterCommand extends Command<Admin, number> {

    constructor(admin: Admin, private readonly _adminRepository: IAdminRepository) {
        super(admin);
    }

    public execute(): number | ApplicationError {
        try {
            return this._adminRepository.saveUser(this._parameters);
        } catch (error) {
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante o processo de registro. Por favor, tente novamente em instantes.",
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes.", `${error}`);
        }
    }
}

export default RegisterCommand;