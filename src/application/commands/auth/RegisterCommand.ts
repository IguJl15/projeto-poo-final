import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import IUser from "../../../contracts/entities/IUser";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import { UserAlreadyExists } from "../../errors/CommandErrors";
import { DataAccessOperationException } from "../../errors/DataAccessExceptions";
import AuthValidator from "./AuthValidator";

class RegisterCommand extends Command<IUser, number> {

    constructor(user: IUser, private readonly _userRepository: IUserRepository) {
        super(user);
    }

    public execute(): number | ApplicationError {
        try {
            const emailValidation = AuthValidator.validateEmail(this._parameters.email);
            if (emailValidation != null) return emailValidation;

            const passwordValidation = AuthValidator.validatePassword(this._parameters.password);
            if (passwordValidation != null) return passwordValidation;
            
            if(this._userRepository.exists(this._parameters)) return new UserAlreadyExists();
            
            return this._userRepository.saveUser(this._parameters);
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