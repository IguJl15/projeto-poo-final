import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import IUser from "../../../contracts/entities/IUser";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import { InvalidEmail, InvalidPassword, UserNotFound } from "../../errors/CommandErrors";
import { DataAccessOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";
import AuthValidator from "./AuthValidator";

type LoginCommandModel = {
    email: string;
    password: string;
}

class LoginCommand extends Command<LoginCommandModel, IUser> {

    constructor(loginInfo: LoginCommandModel, private readonly _userRepository: IUserRepository) {
        super(loginInfo);
    }


    public execute(): IUser | ApplicationError {
        try {
            // validation
            const emailValidation = AuthValidator.validateEmail(this._parameters.email);
            if (emailValidation != null) return emailValidation;

            const passwordValidation = AuthValidator.validatePassword(this._parameters.password);
            if (passwordValidation != null) return passwordValidation;

            const resultUser = this._userRepository.getUserByEmail(this._parameters.email);

            if (resultUser.password != this._parameters.password) return new UserNotFound();
            
            return resultUser;

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
