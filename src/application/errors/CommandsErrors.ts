import ApplicationError from "../../common/errors/ApplicationError";

class InvalidPassword extends ApplicationError {
    constructor() {
        super('Senha incorreta.')
    }
}
class UserNotFound extends ApplicationError {
    constructor() {
        super('Usuário não encontrado.')
    }
}

export { InvalidPassword, UserNotFound }