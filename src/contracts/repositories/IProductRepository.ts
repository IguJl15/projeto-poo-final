import { IProduct } from "../entities/IProduct";

export interface IProductRepository {
    // Create & Update
    saveProduct(product: IProduct): number;
    saveProducts(products: IProduct[]): number[];

    // Read
    getProductsByOwnerId(id: number): IProduct[];
    getAllProducts(): IProduct[];

    // Delete
    deleteById(id:number): boolean;
}