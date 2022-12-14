import MapProductsRepository from "./application/repositories/products/MapProductsRepository";
import MapUsersRepository from "./application/repositories/users/MapUsersRepository";
import WelcomeScreen from "./presentation/home/WelcomeScreen";

function main() {
    const usersRepo = new MapUsersRepository();
    const productsRepo = new MapProductsRepository();
    
    const home = new WelcomeScreen(usersRepo);
    home.show();
}

main()