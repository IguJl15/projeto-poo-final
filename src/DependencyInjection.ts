// import { LoginCommand } from "./application/commands/auth/LoginCommand";
// import MapProductsRepository from "./application/repositories/products/MapProductsRepository";
// import MapUsersRepository from "./application/repositories/users/MapUsersRepository";
// import { IProductRepository } from "./contracts/repositories/IProductRepository";
// import IUserRepository from "./contracts/repositories/IUsersRepository";

// class DependencyInjection {

//     private static _instance: DependencyInjection;

//     private constructor() { }

//     public static get Instance()
//     {
//         return this._instance || (this._instance = new this());
//     }
//     // SINGLETON

//     readonly items: Map<string, object> = new Map();

//     setUp(): void {
//         this.items.set("IUserRepository", new MapUsersRepository());
//         this.items.set("IProductRepository", new MapProductsRepository());
//     }

//     static getIt<T>(query: string): T | null {
//         return this.
//     }
// }

// enum DatabaseType {
//     map,
//     postgres
// }