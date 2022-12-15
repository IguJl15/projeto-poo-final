import { LoginCommand } from "../../../application/commands/auth/LoginCommand";
import ApplicationError from "../../../common/errors/ApplicationError";
import IUser from "../../../contracts/entities/IUser";
import { IProductRepository } from "../../../contracts/repositories/IProductRepository";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import { askInput, clearScreen } from "../../util";
import ErrorScreen from "../error/ErrorScreen";
import HomeScreen from "../home/HomeScreen";
import Screen from "../Screen";

class LoginScreen extends Screen {

    constructor(private readonly _userRepository: IUserRepository, private readonly _productRepository: IProductRepository) {
        super("Login");

    }

    show(): void {
        do {
            clearScreen();

            this.showTitle();
            const userEmail = askInput("Insira seu email: ");
            const userPassword = askInput("Insira sua senha: ");

            const loginCommand = new LoginCommand(
                { email: userEmail, password: userPassword },
                this._userRepository
            );

            const result = loginCommand.execute();

            if (result instanceof ApplicationError) {
                const errorScreen = new ErrorScreen(result.message + result.details);
                errorScreen.show();
                // if (result instanceof InvalidPassword ||
                //     result instanceof UserNotFound) continue;

                continue;
            }

            return this.showHomePage(result);
        } while (true);
    }

    private showHomePage(user: IUser) {
        const homeScreen =
            new HomeScreen(`Olá, ${user.name} (${user.id})`,
                user.id,
                this._productRepository);

        homeScreen.show();
    }
}

export default LoginScreen;