import { Command, NoParams } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import IUser from "../../../contracts/entities/IUser";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import { DataAccessOperationException } from "../../errors/DataAccessExceptions";

class ListUsers extends Command<NoParams, IUser[]> {

    constructor(private readonly _usersRepo: IUserRepository) {
        super();
    }

    public execute(): IUser[] | ApplicationError {
        try {
            return this._usersRepo.getAll();
        } catch (error) {
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante a requisição de usuários. Por favor, tente novamente em instantes.",
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
    
}