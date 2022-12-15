import * as readLineSync from "readline-sync";

export function askInput(question: string, possibleValues?: string[]): string {
    let str: string = "";

    do {
        str = readLineSync.question(question);

        if (possibleValues && !possibleValues.includes(str)) continue;

        return str;

    } while (true);
}

export function askYesNo(question: string, possibleValues?: string[]): string {
    return askInput(question + " [Y/N]", ["Y", "N"]);
}
export function askEnter() {
    askInput("Pressione <ENTER> para continuar... ");
}

export function clearScreen() {
    console.clear();
}