import IUser from "../../../contracts/entities/IUser";
import IUsersRepository from "../../../contracts/repositories/IUserRepository";
import { DataAccessException, DataAccessOperationException as RepositoryOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";

class MapUsersRepository implements IUsersRepository {

    private _users: Map<number, IUser> = new Map();

    saveUser(user: IUser): number {
        try {
            if (user.id === 0) user.id = this.getNewId();
            this._users.set(user.id, user);

            return user.id;
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a operação de inserção no banco de dados: ${error}`);
        }
    }

    getUserByEmail(email: string): IUser {
        try {
            for (const user of this._users.values()) {
                if (user.email === email) return user;
            }
            throw new ItemNotFoundException()

        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
    }

    getAll(): IUser[] {
        try {
            return Array.from(this._users.values());
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
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

    exists(user: IUser): boolean {
        if (this._users.has(user.id)) return true;

        for (const u of this._users.values()) {
            if (user.email === user.email) return true;
        }

        return false
    }

    private getNewId(): number {
        return (Array.from(this._users.keys()).pop() ?? 0) + 1;
    }
}

export default MapUsersRepository;