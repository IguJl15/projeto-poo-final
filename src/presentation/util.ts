import * as readLineSync from "readline-sync";

export function askInput(question: string, possibleValues?: string[]): string {
    console.log(possibleValues);
    let str: string = "";

    do {
        str = readLineSync.question(question);

        if((possibleValues) && possibleValues.includes(str)) return str;

    } while (true);
    
}

export function clearScreen() {
    console.clear();
}