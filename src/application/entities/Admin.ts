import { IProduct } from "../../contracts/entities/IProduct";
import IUser from "../../contracts/entities/IUser";

class Admin implements IUser {
    constructor(
        readonly id: number,

        public name: string,
        public email: string,
        readonly password: string,

        readonly products: IProduct[],

        readonly createdAt: Date,
        // public updatedAt?: Date,
        public deletedAt?: Date,
    ) { }
}

export default Admin;