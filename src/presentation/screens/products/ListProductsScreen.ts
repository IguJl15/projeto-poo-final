import { IProduct } from "../../../contracts/entities/IProduct";
import { askEnter, askInput, clearScreen } from "../../util";
import Screen from "../Screen";

class ListProductsScreen extends Screen {
    constructor(public list: IProduct[]) {
        super("Produtos");
    }

    show(): void {
        clearScreen();

        this.showTitle();
        this.list.forEach(product => {
            console.table(product);
        });

        askEnter();
    }
}

export default ListProductsScreen;