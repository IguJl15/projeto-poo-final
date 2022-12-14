import { Command, NoParams } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import { IProduct } from "../../../contracts/entities/IProduct";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import { UserNotFound } from "../../errors/CommandErrors";
import { DataAccessException, DataAccessOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";

class ListAllProducts extends Command<NoParams, IProduct[]> {
    constructor(
        private readonly _productRepository: IProductRepository
    ) {
        super();
    }

    public execute(): IProduct[] | ApplicationError {
        try {
            return this._productRepository.getAllProducts();
        } catch (error) {
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante a requisição de produtos. Por favor, tente novamente em instantes.",
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
}

export default ListAllProducts