interface IUser {
    readonly id: number;
    
    name: string;
    email: string;
    readonly password: string;

    readonly created_at: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export default IUser;