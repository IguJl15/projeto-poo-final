import RegisterCommand from "../../../application/commands/auth/RegisterCommand";
import ApplicationError from "../../../common/errors/ApplicationError";
import IUserRepository from "../../../contracts/repositories/IUserRepository";
import ErrorScreen from "../error/ErrorScreen";
import Screen from "../Screen";
import { askInput, clearScreen } from "../../util";
import { InvalidPassword, UserAlreadyExists, UserNotFound } from "../../../application/errors/CommandErrors";
import Admin from "../../../application/entities/Admin";
import IUser from "../../../contracts/entities/IUser";

class RegisterScreen extends Screen {

    constructor(private readonly _usersRepository: IUserRepository) {
        super("Registro");
    }

    show(): void {
        do {
            // clearScreen();

            this.showTitle();
            const userName = askInput("Nome completo: ");
            const userEmail = askInput("Email: ");
            const userPassword = askInput("Senha: ");

            const now = new Date();

            const user: IUser = new Admin(0, userName, userEmail, userPassword, [], now);

            const registerCommand = new RegisterCommand(user,
                this._usersRepository
            );

            const result = registerCommand.execute();

            if (result instanceof ApplicationError) {
                const errorScreen = new ErrorScreen(result.message + result.details);
                errorScreen.show();
                // if (result instanceof InvalidPassword ||
                //     result instanceof UserNotFound ||
                //     result instanceof UserAlreadyExists) continue;

                return;
            }

            console.log("Usuário registrado com sucesso!")
            return;
        } while (true);
    }
}

export default RegisterScreen