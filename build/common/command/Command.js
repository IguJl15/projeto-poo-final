"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor(_parameters) {
        this._parameters = _parameters;
    }
    getParameters() {
        return this._parameters;
    }
}
exports.Command = Command;
