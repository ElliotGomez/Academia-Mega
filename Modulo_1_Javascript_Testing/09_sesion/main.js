// Importar las funciones desde el módulo 'operadores.js'
import { sumar, restar, multiplicar, dividir } from './operadores.js';

/*
Crear un módulo que contenga funciones para sumar, restar, multiplicar y dividir dos números.
Cada función debe recibir dos números como parámetros y devolver el resultado de la operación.
*/

// Función para solicitar los valores al usuario utilizando una promesa
function solicitarValores() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const a = parseFloat(prompt("Ingrese el primer número:"));
            const b = parseFloat(prompt("Ingrese el segundo número:"));

            // Validar que los valores ingresados sean números
            if (isNaN(a) || isNaN(b)) {
                reject("Ambos valores deben ser números...");
            } else {
                resolve({ a, b });
            }
        }, 5500); // Retraso de 5 segundos para asegurar que el párrafo inicial se muestre primero
    });
}

// Función para mostrar los resultados de las operaciones en el DOM
function mostrarResultados(a, b) {
    const contenedorResultados = document.getElementById("resultados"); // Obtener el contenedor del DOM
    contenedorResultados.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos resultados

    try {
        // Crear elementos para cada operación y agregarlos al contenedor
        const suma = document.createElement("p");
        suma.textContent = `El resultado de sumar ${a} + ${b} es: ${sumar(a, b)}`;
        contenedorResultados.appendChild(suma);

        const resta = document.createElement("p");
        resta.textContent = `El resultado de restar ${a} - ${b} es: ${restar(a, b)}`;
        contenedorResultados.appendChild(resta);

        const multiplicacion = document.createElement("p");
        multiplicacion.textContent = `El resultado de multiplicar ${a} * ${b} es: ${multiplicar(a, b)}`;
        contenedorResultados.appendChild(multiplicacion);

        // Validación para evitar división por cero
        if (b === 0) {
            const divisionError = document.createElement("p");
            divisionError.textContent = "No se puede dividir entre cero.";
            divisionError.classList.add("error");
            contenedorResultados.appendChild(divisionError);
        } else {
            const division = document.createElement("p");
            division.textContent = `El resultado de dividir ${a} / ${b} es: ${dividir(a, b)}`;
            contenedorResultados.appendChild(division);
        }

        // Agregar un botón para limpiar los resultados
        const botonLimpiar = document.createElement("button");
        botonLimpiar.textContent = "Limpiar Resultados";
        botonLimpiar.classList.add("btn-limpiar");
        botonLimpiar.addEventListener("click", () => {
            contenedorResultados.innerHTML = "<p>Espera se está recargando de nuevo la página...</p>";
            setTimeout(() => {
                location.reload(); // Recargar la página
            }, 3000); // Esperar 1 segundo antes de recargar
        });
        contenedorResultados.appendChild(botonLimpiar);
    } catch (error) {
        // Mostrar el error en el contenedor
        const errorMensaje = document.createElement("p");
        errorMensaje.textContent = `¡ERROR!, ${error.message}`;
        errorMensaje.classList.add("error");
        contenedorResultados.appendChild(errorMensaje);
        console.error("Error al realizar las operaciones:", error.message);
    }
}

// Ejecutar la lógica principal
solicitarValores()
    .then(({ a, b }) => {
        mostrarResultados(a, b); // Mostrar los resultados si los valores son válidos
    })
    .catch((error) => {
        const contenedorResultados = document.getElementById("resultados");
        const errorMensaje = document.createElement("p");
        errorMensaje.textContent = `¡ERROR!, ${error}`;
        errorMensaje.classList.add("error");
        contenedorResultados.innerHTML = "";
        contenedorResultados.appendChild(errorMensaje);
        console.error("¡ERROR!, ", error);
    });