"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginScreen {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    show() {
        console.log("Login");
    }
}
exports.default = LoginScreen;
