import Admin from "./application/entities/Admin";
import MapProductsRepository from "./application/repositories/products/MapProductsRepository";
import MapUsersRepository from "./application/repositories/users/MapUsersRepository";
import WelcomeScreen from "./presentation/screens/welcome/WelcomeScreen";

function main() {
    const usersRepo = new MapUsersRepository();
    const productsRepo = new MapProductsRepository();
    addMockUsers(usersRepo);
    
    const home = new WelcomeScreen("Bem vindo", usersRepo, productsRepo);
    home.show();

    console.table(usersRepo.getUserByEmail("igor"));
    console.table(productsRepo.getAllProducts());
    
}

main()

function addMockUsers(usersRepo: MapUsersRepository) {
    usersRepo.saveUser(new Admin(1, "Admin", "admin@admin.com", "1234", [], new Date()));
    usersRepo.saveUser(new Admin(2, "User", "user@user.com", "1234", [], new Date()));  
}
