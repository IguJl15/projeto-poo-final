import { Command } from "../../../common/command/Command";
import ApplicationError from "../../../common/errors/ApplicationError";
import { IProduct } from "../../../contracts/entities/IProduct";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import { DataAccessOperationException } from "../../errors/DataAccessExceptions";

class RegisterProduct extends Command<IProduct, number> {
    constructor(product: IProduct, private readonly _productRepository: IProductRepository) {
        super(product);
    }

    public execute(): number | ApplicationError {
        try {
            return this._productRepository.saveProduct(this._parameters);
        } catch (error) {
            if (error instanceof DataAccessOperationException)
                return new ApplicationError(
                    "Ocorreu um erro durante a operação de . Por favor, tente novamente em instantes.",
                    error.error);

            return new ApplicationError("Ocorreu um erro inesperado. Por favor, tente novamente em instantes. Detalhes: " + error);
        }
    }

}

export default RegisterProduct;