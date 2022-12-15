import { IProduct } from "../../contracts/entities/IProduct";

class DigitalProduct implements IProduct {

    constructor(
        public id: number,

        public ownerId: number,

        public name: string,
        public description: string,
        public price: number,

        public category: string,

        public createdAt: Date,
        // public updatedAt?: Date,
        public deletedAt?: Date,

    ) { }
}

export default DigitalProduct;
