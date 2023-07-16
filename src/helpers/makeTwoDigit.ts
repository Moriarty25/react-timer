export function makeTwoDigit(number: number): string {
    return number < 10 ? "0" + number : number.toString();
};
