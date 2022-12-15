interface IUser {
    id: number;
    
    name: string;
    email: string;
    readonly password: string;

    readonly createdAt: Date;
    // updatedAt?: Date;
    deletedAt?: Date;
}

export default IUser;