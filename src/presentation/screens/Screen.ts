abstract class Screen {
    constructor(
        protected readonly title: string
    ) { }

    abstract show(): void;

    showTitle(): void {
        console.log(`-= -= -= ${this.title} =- =- =-`);
    }
}

export default Screen;