import IUser from "../../../contracts/entities/IUser";
import IUsersRepository from "../../../contracts/repositories/IUsersRepository";
import { DataAccessException, DataAccessOperationException as RepositoryOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";

class MapUsersRepository implements IUsersRepository {
    
    private _users: Map<number, IUser> = new Map();
    
    saveUser(user: IUser): number {
        try {
            const id = user.id;
            this._users.set(id, user);
            
            if (!this._users.has(id)) throw new ItemNotFoundException(id);
            
            return id;
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a operação de inserção no banco de dados: ${error}`);
        }
    }

    getUserByEmail(email: string): IUser {
        throw new Error("Method not implemented.");
    }

    deleteById(id: number): boolean {
        try {

            if (!this._users.has(id)) throw new ItemNotFoundException(id);

            return this._users.delete(id);
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a operação de deleção no banco de dados: ${error}`);
        }
    }
}

export default MapUsersRepository;