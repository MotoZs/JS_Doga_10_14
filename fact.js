function factorial() {
    const inputNumber = parseInt(prompt("Kérlek, add meg a pozitív egész számot:"));

    if (!isNaN(inputNumber) && inputNumber >= 0) {
        if (inputNumber === 0 || inputNumber === 1) {
            return 1; // 0! és 1! faktoriálisa 1
        }
        let result = 1;
        for (let i = 2; i <= inputNumber; i++) {
            result *= i; // Faktoriális kiszámítása
        }
        return result;
    } else {
        return "Kérlek, adj meg egy pozitív egész számot!";
    }
}

// Függvény hívása és eredmény kiírása
const result = factorial();
console.log(result);