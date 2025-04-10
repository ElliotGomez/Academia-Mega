function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`[toBe] --> Pasó: ${actual} === ${expected}`);
            } else {
                console.error(`[toBe] --> Falló, esperado: ${expected}, recibido: ${actual}`);
            }
        },
        toEqual(expected) {
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if (passed) {
                console.log(`[toEqual] --> Pasó: ${actual} y es ${expected} <--> OBJETOS IGUALES`);
            } else {
                console.error(`[toEqual] --> Falló, esperado: ${expected}, recibido: ${actual} <--> OBJETOS DIFERENTES`);
            }
        }
    };
}

function sumar(a, b) {
    return a + b;
}

// Solicitar números al usuario
function solicitarNumerosYProbar() {
    try {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Por favor, ingresa valores numéricos válidos.");
        }

        const resultado = sumar(num1, num2);
        console.log(`La suma de ${num1} y ${num2} es: ${resultado}`);

        // Pruebas
        console.log("---------------------------------------------------");
        console.log("Resultado solicitando valores");
        expect(sumar(num1, num2)).toBe(resultado); // Prueba con los valores ingresados
        console.log("Resultado solicitando valores y un resultado fijo de 10");
        expect(sumar(num1, num2)).toBe(10); // Prueba con los valores ingresados y un valor fijo
        console.log("Resultado con Prueba Fija [1 + 2] = 3");
        expect(sumar(1, 2)).toBe(3); // Prueba fija

        console.log("---------------------------------------------------");
        console.log("Resultado solicitando valores");
        expect(sumar(num1, num2)).toEqual(resultado); // Prueba con los valores ingresados
        console.log("Resultado solicitando valores y un resultado fijo de 15");
        expect(sumar(num1, num2)).toEqual(15); // Prueba con los valores ingresados y un valor
        console.log("Resultado con Prueba Fija [10 + 5] = 15");
        expect(sumar(10, 5)).toEqual(15); // Prueba fija
    } catch (error) {
        console.error(error.message);
    }
}
6
// Ejecutar la función para solicitar números y probar
solicitarNumerosYProbar();