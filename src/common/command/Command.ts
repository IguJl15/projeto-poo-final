import ApplicationError from "../errors/ApplicationError";

abstract class Command<TParameters, TReturnType> {
    constructor(protected _parameters: TParameters) { }

    public abstract execute(): TReturnType | ApplicationError;

    public getParameters(): TParameters {
        return this._parameters;
    }
}

type NoParams = void;

export { Command, NoParams };
