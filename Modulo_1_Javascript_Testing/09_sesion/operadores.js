// Función para sumar dos números
export function sumar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Ambos argumentos deben ser números.");
    }
    return a + b;
}

// Función para restar dos números
export function restar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Ambos argumentos deben ser números.");
    }
    return a - b;
}

// Función para multiplicar dos números
export function multiplicar(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Ambos argumentos deben ser números.");
    }
    return a * b;
}

// Función para dividir dos números
export function dividir(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Ambos argumentos deben ser números.");
    }
    if (b === 0) {
        throw new Error("No se puede dividir entre cero.");
    }
    return a / b;
}