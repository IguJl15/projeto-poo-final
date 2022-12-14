"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginScreen_1 = __importDefault(require("../auth/LoginScreen"));
const util_1 = require("../util");
class WelcomeScreen {
    constructor(usersRepo) {
        this._usersRepo = usersRepo;
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, util_1.clearScreen)();
            console.log("-= -= -= Bem vindo =- =- =-");
            console.log("1 - Login");
            console.log("2 - Register");
            console.log("3 - Exit");
            const op = yield (0, util_1.askInput)("Por favor, selecione uma opção", ["1", "2", "3"]);
            switch (op) {
                case "1":
                    const loginScreen = new LoginScreen_1.default(this._usersRepo);
                    loginScreen.show();
                    break;
                case "2":
                    // this.register();
                    break;
                case "3":
                    process.exit(0);
                    break;
            }
        });
    }
}
exports.default = WelcomeScreen;
