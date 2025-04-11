function multiplicar(a, b) {
    return a * b;
}   

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
} 

module.exports = {
    multiplicar,
    dividir
}
