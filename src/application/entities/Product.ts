import { IProduct } from "../../contracts/entities/IProduct";

class Product implements IProduct {
    constructor(
        public id: number,

        public ownerId: number,
        
        public name: string,
        public description: string,
        public value: number,

        public brand: string,

        public category: string,
        public quantity: number,

        public createdAt: Date,
        public updatedAt?: Date,
        public deletedAt?: Date,
    ) { }
}

export default Product