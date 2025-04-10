// Escuchar el evento de envío del formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de las notas
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    // Obtener referencias a los elementos del DOM para mostrar resultados
    const nombre = document.getElementById("nombre").value;
    const resultadoDiv = document.getElementById("resultado");
    const nombreResultado = document.getElementById("nombreResultado");
    const promedioP = document.getElementById("promedio");
    const estadoP = document.getElementById("estado");

    try {
        // Calcular el promedio
        const promedio = calcularPromedio(nota1, nota2, nota3);

        // Mostrar los resultados en el DOM
        nombreResultado.textContent = `Nombre: ${nombre}`;
        promedioP.textContent = `Promedio: ${promedio.toFixed(2)}`;
        estadoP.textContent = `Estado: ${promedio === 10 ? "Excelencia" : promedio >= 6 ? "Aprobado" : "Reprobado"}`;
        estadoP.style.color = promedio === 10 ? "blue" : promedio >= 6 ? "green" : "red";
        

        // Mostrar el contenedor de resultados
        resultadoDiv.style.display = "block";
    } catch (error) {
        // Mostrar el mensaje de error en el contenedor de resultados
        resultadoDiv.style.display = "block";
        nombreResultado.textContent = "";
        promedioP.textContent = "";
        estadoP.textContent = error.message;
        estadoP.style.color = "red";
    }
});

// Función para calcular el promedio de tres notas  
function calcularPromedio(n1, n2, n3){
    // Validar que las notas sean números válidos
    if([n1,n2,n3].some(isNaN)){ 
        throw new Error("Todas las notas deben ser números válidos");
    } 
    // Validar que las notas estén entre 0 y 10
     if([n1,n2,n3].some(n => n<0 || n>10)){ 
        throw new Error("Error, Las notas deben estar entre 0 y 10");
    }
    // Calcular el promedio
    return (n1 + n2 + n3) / 3
}