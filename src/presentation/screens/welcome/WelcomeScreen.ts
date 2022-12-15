import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import LoginScreen from "../auth/LoginScreen";
import Screen from "../Screen";
import { askInput, clearScreen } from "../../util";
import RegisterScreen from "../auth/RegisterScreen";
import HomeScreen from "../home/HomeScreen";

class WelcomeScreen extends Screen {


    constructor(
        title: string,
        private readonly _usersRepo: IUserRepository,
        private readonly _productsRepo: IProductRepository
    ) {
        super(title);
    }

    show(): void {

        do {
            clearScreen();

            this.showTitle();
            console.log("1 - Login");
            console.log("2 - Register");
            console.log("3 - Exit");

            const op = askInput("Por favor, selecione uma opção", ["1", "2", "3"]);

            switch (op) {
                case "1":
                    const loginScreen = new LoginScreen(this._usersRepo, this._productsRepo);
                    return loginScreen.show();
                case "2":
                    const registerScreen = new RegisterScreen(this._usersRepo);
                    registerScreen.show();
                    break;
                case "3":
                    process.exit(0);
            }
            
        } while (true);
    }
}

export default WelcomeScreen;