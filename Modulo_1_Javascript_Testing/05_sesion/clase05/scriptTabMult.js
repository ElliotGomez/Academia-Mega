const multiplicador = factor => numeroFactor => numeroFactor * factor;         
const selectElement = document.getElementById('tabla');

// Crear un contenedor para mostrar la tabla de multiplicar
const resultadoDiv = document.createElement('div');
document.body.appendChild(resultadoDiv);

// Mostrar el valor inicial del elemento <select>
console.log("Valor inicial del select:", selectElement.value);

var numero = selectElement.value;
resultadoDiv.innerHTML = "<br>";
multiplicarXNum(numero);

selectElement.addEventListener('change', (event) => { // Escuchar el evento 'change' en el select
    const selectedValue = event.target.value; // Obtener el valor del option seleccionado
    //console.log(`Opción seleccionada: ${selectedValue}`);
    numero = selectedValue; // Asignar el valor seleccionado a una variable
    //console.log(`Tabla seleccionada: ${numero}`);

    // Limpiar el contenido previo
    resultadoDiv.innerHTML = "";
    resultadoDiv.innerHTML += "<br>";

    multiplicarXNum(numero);
});  

// Generar la tabla de multiplicar
function multiplicarXNum(num) {
    for (let i = 1; i <= 12; i++) {
        const factorizar = multiplicador(i);
        const miTabla = `${numero} x ${i} = ${factorizar(num)}`;
        //console.log(miTabla);
        resultadoDiv.innerHTML += miTabla + "<br>";
    }
} 