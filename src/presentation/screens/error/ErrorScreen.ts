import { askEnter } from "../../util";
import Screen from "../Screen";

class ErrorScreen extends Screen {
    constructor(private readonly error: string) {
        super("! ERROR !");
    }

    show(): void {
        this.showTitle();
        console.log(this.error);
        askEnter();
    }
}

export default ErrorScreen;