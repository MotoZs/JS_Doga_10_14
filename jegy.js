function factorial() {
    const input = prompt("Kérlek, add meg a pozitív egész számot:");
    
    // Ellenőrizzük, hogy az input érvényes szám-e
    if (!input || isNaN(input) || Number(input) < 0) {
        return "Kérlek, adj meg egy pozitív egész számot!";
    }

    const inputNumber = Number(input); // Konvertálás Number-rel

    if (inputNumber === 0 || inputNumber === 1) {
        return 1; // 0! és 1! faktoriálisa 1
    }
    
    let result = 1;
    for (let i = 2; i <= inputNumber; i++) {
        result *= i; // Faktoriális kiszámítása
    }
    return result;
}

// Függvény hívása és eredmény kiírása
const result = factorial();
console.log(result);