import { IProductRepository } from "../../contracts/repositories/IProductRepository";
import IUserRepository from "../../contracts/repositories/IUsersRepository";
import LoginScreen from "../auth/LoginScreen";
import IScreen from "../IScreen";
import { askInput, clearScreen } from "../util";

class WelcomeScreen implements IScreen {

    private readonly _usersRepo: IUserRepository;

    constructor(usersRepo: IUserRepository) {
        this._usersRepo = usersRepo;
    }

    show(): void {
        clearScreen();

        console.log("-= -= -= Bem vindo =- =- =-");
        console.log("1 - Login");
        console.log("2 - Register");
        console.log("3 - Exit");

        const op = askInput("Por favor, selecione uma opção", ["1", "2", "3"]);

        switch (op) {
            case "1":
                const loginScreen = new LoginScreen(this._usersRepo);
                loginScreen.show();
                break;
            case "2":
                // this.register();
                break;
            case "3":
                process.exit(0);
                break;
        }
    }
}

export default WelcomeScreen;