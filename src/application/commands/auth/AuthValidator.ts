import ApplicationError from "../../../common/errors/ApplicationError";
import { InvalidEmail, InvalidPassword } from "../../errors/CommandErrors";

class AuthValidator {

    static validateEmail(email: string): ApplicationError | null {
        const emailRegex = '^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$'

        if (!email.match(emailRegex)) return new InvalidEmail();

        return null;
    }
    static validatePassword(password: string): ApplicationError | null {
        if (password.length < 4 || password.length > 20) return new InvalidPassword();

        return null;
    }
}

export default AuthValidator;