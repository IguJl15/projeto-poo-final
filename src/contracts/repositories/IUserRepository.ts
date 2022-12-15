import IUser from "../entities/IUser";

interface IUserRepository {
    // Create & Update
    saveUser(user: IUser): number;
    
    // Read
    getAll(): IUser[];
    getUserByEmail(email: string): IUser;
    // getAllUsers(): IUser[];

    
    // Delete
    deleteById(id: number): boolean;
    exists(user: IUser): boolean;
}

export default IUserRepository;