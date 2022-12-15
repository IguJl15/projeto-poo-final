import ListAllProducts from "../../../application/commands/products/ListAllProducts";
import ListProductsByOwnerId from "../../../application/commands/products/ListProductsByOwnerId";
import RegisterProduct from "../../../application/commands/products/RegisterProduct";
import DigitalProduct from "../../../application/entities/DigitalProduct";
import Product from "../../../application/entities/Product";
import ApplicationError from "../../../common/errors/ApplicationError";
import { IProduct } from "../../../contracts/entities/IProduct";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import { askInput, askYesNo, clearScreen } from "../../util";
import ErrorScreen from "../error/ErrorScreen";
import ListProductsScreen from "../products/ListProductsScreen";
import Screen from "../Screen";

class HomeScreen extends Screen {

    private getProductsByOwnerId: ListProductsByOwnerId;
    private getAllProducts: ListAllProducts;

    constructor(
        title: string,
        private readonly userId: number,
        private readonly productRepository: IProductRepository,
    ) {
        super(title);

        this.getProductsByOwnerId = new ListProductsByOwnerId(userId, productRepository);
        this.getAllProducts = new ListAllProducts(productRepository);
    }

    show(): void {
        do {
            clearScreen();

            this.showTitle();
            console.log("1 - Listar seus produtos");
            console.log("2 - Cadastrar novo produto");
            console.log("3 - Listar produtos");
            console.log("0 - Sair");

            const op = askInput("Por favor, selecione uma opção", ["1", "2", "3"]);

            switch (op) {
                case "1":
                    this.listProducts();
                    break;
                case "2":
                    this.registerProduct();
                    break;
                case "3":
                    this.listAllProducts();
                    break;
                case "0":
                    return;
            }
        } while (true);
    }

    private listProducts(): void {
        const result = this.getProductsByOwnerId.execute();

        if (result instanceof ApplicationError) return new ErrorScreen(result.message).show();

        const listProducts = new ListProductsScreen(result).show();
    }

    private listAllProducts(): void {
        const result = this.getAllProducts.execute();

        if (result instanceof ApplicationError) return new ErrorScreen(result.message).show();

        // const products = result.map(this.productToString);

        const listProducts = new ListProductsScreen(result).show();
    }

    private registerProduct(): void {
        const name = askInput("Digite o nome do produto: ");
        const price = Number(askInput("Digite o preço do produto: "));
        const description = askInput("Digite a descrição do produto: ");
        const category = askInput("Digite a categoria do produto: ");

        const now = new Date();

        const isDigitalService = askYesNo("Este é um produto digital?")

        let product: IProduct;
        if (isDigitalService) {
            product = new DigitalProduct(0, this.userId, name, description, price, category, now);
        } else {
            const brand = askInput("Digite a marca do produto: ");
            const quantity = Number(askInput("Digite quantas unidades deste produto há em estoque: "));
            product = new Product(0, this.userId, name, description, price, brand, category, quantity, now);
        }

        const saveResult = new RegisterProduct(product, this.productRepository).execute();
        if (saveResult instanceof ApplicationError) return new ErrorScreen(saveResult.message).show();

        console.log("Produto cadastrado com sucesso");
    }
}

export default HomeScreen