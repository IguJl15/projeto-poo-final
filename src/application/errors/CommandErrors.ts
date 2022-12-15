import ApplicationError from "../../common/errors/ApplicationError";

class InvalidPassword extends ApplicationError {
    constructor() {
        super('Senha inválida.')
    }
}

class InvalidEmail extends ApplicationError {
    constructor() {
        super('Email inválido.')
    }
}

class UserNotFound extends ApplicationError {
    constructor() {
        super('Usuário não encontrado.')
    }
}

class UserAlreadyExists extends ApplicationError {
    constructor() {
        super('Usuário já existe.')
    }
}


export { InvalidPassword, InvalidEmail, UserNotFound, UserAlreadyExists }