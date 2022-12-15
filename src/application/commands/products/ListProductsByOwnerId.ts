import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import { IProduct } from "../../../contracts/entities/IProduct";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import { UserNotFound } from "../../errors/CommandErrors";
import { DataAccessException, DataAccessOperationException, ItemNotFoundException } from "../../errors/DataAccessExceptions";

class ListProductsByOwnerId extends Command<number, IProduct[]> {
    constructor(
        ownerId: number,
        private readonly _productRepository: IProductRepository
    ) {
        super(ownerId);
    }

    public execute(): IProduct[] | ApplicationError {
        try {
            if (!this._parameters) return new ApplicationError("Não foi possível listar os produtos. Id do usuário não informado.");
            
            return this._productRepository.getProductsByOwnerId(this._parameters);
        } catch (error) {
            if (error instanceof ItemNotFoundException) return [];
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante a requisição de produtos. Por favor, tente novamente em instantes." + error,
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }
}

export default ListProductsByOwnerId