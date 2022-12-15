import { IProduct } from "../../../contracts/entities/IProduct";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import { ItemNotFoundException, DataAccessException, DataAccessOperationException as RepositoryOperationException } from "../../errors/DataAccessExceptions";

class MapProductsRepository implements IProductRepository {

    private _products: Map<number, IProduct> = new Map();

    saveProduct(product: IProduct): number {
        try {
            if (product.id === 0) product.id = this.getNewId();
            
            this._products.set(product.id, product);

            if (!this._products.has(product.id)) throw new ItemNotFoundException(product.id);

            return product.id;
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a operação de inserção no banco de dados: ${error}`);
        }
    }
    saveProducts(products: IProduct[]): number[] {
        const list: number[] = [];

        for (const item of products) {
            const id = this.saveProduct(item);
            list.push(id);
        }

        return list;
    }

    getProductsByOwnerId(ownerId: number): IProduct[] {
        try {
            const list: IProduct[] = [];
            
            for (const item of this._products.values()) {
                if (item.ownerId === ownerId) list.push(item);
            }

            if (list.length === 0) throw new ItemNotFoundException(ownerId);

            return list;
        } catch (error) {
            if (error instanceof ItemNotFoundException) throw error;
            // console.log("ERRO NO REPO: ");
            // console.log(error);
            throw new RepositoryOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
    }

    getAllProducts(): IProduct[] {
        try {
            const list: IProduct[] = [];
            
            for (const item of this._products.values()) {
                list.push(item);
            }

            return list;
        } catch (error) {
            throw new RepositoryOperationException(`Error durante a requisição ao banco de dados: ${error}`);
        }
    }

    deleteById(id: number): boolean {
        try {
            if (!this._products.has(id)) throw new ItemNotFoundException(id);

            return this._products.delete(id);
        } catch (error) {
            if (error instanceof DataAccessException) throw error;
            throw new RepositoryOperationException(`Error durante a operação de deleção no banco de dados: ${error}`);
        }
    }

    private getNewId(): number {
        return (Array.from(this._products.keys()).pop() ?? 0) + 1;
    }
    
}

export default MapProductsRepository;