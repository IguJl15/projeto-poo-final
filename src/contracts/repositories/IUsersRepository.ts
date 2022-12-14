import IUser from "../entities/IUser";

interface IUserRepository {
    // Create & Update
    saveUser(user: IUser): number;

    // Read
    getUserByEmail(email: string): IUser;
    // getAllUsers(): IUser[];

    // Delete
    deleteById(id: number): boolean;
}

export default IUserRepository;