import IUserRepository from "../../contracts/repositories/IUsersRepository";
import IScreen from "../IScreen";

class LoginScreen implements IScreen {
    private readonly usersRepository: IUserRepository;
    constructor(usersRepository: IUserRepository) {
        this.usersRepository = usersRepository;
    }
    
    show(): void {
        console.log("Login");
    }
}

export default LoginScreen