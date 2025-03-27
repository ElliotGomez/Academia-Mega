/* ---------------------------------------------------------------------- */
/* - FUNCIÓN FLECHA PARA REPRESENTAR UN CLOSURE UTILIZADA EN LA CLASE 3 - */
/* ---------------------------------------------------------------------- */

/* ********************************************************************** */
/* ********************************************************************** */
const contador = (cuenta = 1) => () => cuenta++;

let incrementar = contador();
let counter = 1;
let numClosure = prompt("Escribe el número entre 1 y 10, de CLOSURE que deseas ver");
numClosure = Number(numClosure);

// condicional para validar la tabla de multiplicar
if(numClosure < 1 || numClosure > 10){
    alert("Escribe solo un valor entre 1 y 10 por favor");
}else if(numClosure != Number(numClosure)){
    alert("No escribiste un número");
}else{
    console.log("----------------------------------------------------------------------");    
    console.log("- FUNCIÓN FLECHA PARA REPRESENTAR UN CLOSURE UTILIZADA EN LA CLASE 3 -");
    console.log("----------------------------------------------------------------------");
    console.log(`REPLICACIÓN DE CLOSURE: ${numClosure} VECES`);
    while(counter <= numClosure){
        console.log(`Closure: ${incrementar()}`);
        counter ++;
    }
    console.log("");
    console.log("");
}



/* ------------------------------------------------------------------ */
/* - FUNCIÓN FLECHA PARA RESUMIR LA FUNCIÓN UTILIZADA EN LA CLASE 3 - */
/* ------------------------------------------------------------------ */

/* ****************************************************************** */
/* ****************************************************************** */
const multiplicador = factor => numeroFactor => numeroFactor * factor; 

let numero;
numero = prompt("Escribe la tabla de multiplicar del 1 al 10");
numero = Number(numero);

// condicional para validar la tabla de multiplicar
if(numero < 1 || numero > 10){
    alert("Escribe la tabla correcta del 1 al 10");
}else if(numero != Number(numero)){
    alert("No escribiste un número");
}else{
    console.log("------------------------------------------------------------------------");    
    console.log("---  FUNCIÓN FLECHA PARA RESUMIR LA FUNCIÓN UTILIZADA EN LA CLASE 3  ---");
    console.log("------------------------------------------------------------------------");
    console.log("Multiplicación de un número por otro, para Duplicar, Triplicar, ETCETERA");
    console.log(`TABLA DE MULTIPLICAR DEL: "${numero}"`);    
    multiplicarXNum(numero);
}

// función que devuelve la multiplicación un número por otro número
function multiplicarXNum(num){
    for(let i = 1; i <= 10; i++ ){
        const factorizar = multiplicador(i);
        console.log(`${numero} x ${i} = ${factorizar(num)}`);
    }
    console.log("");   
}



/* ****************************************************************** */
/* ****************************************************************** */
const multiplicadorExp = exponente => base => base ** exponente; 

let numBase;
numBase = prompt("Escribe el número base [1-10], para elevar su potencia de 1 a 5");
numBase = Number(numBase);

// condicional para validar la tabla de multiplicar
if(numBase < 1 || numBase > 10){
    alert("Escribe correctamente la base [1-10], para elevar su potencia de 1 a 5");
}else if(numBase != Number(numBase)){
    alert("No escribiste un número");
}else{
    console.log("------------------------------------------------------------------------");
    console.log("  Elevar la base a la potencia [1-5], elevando al CUADRADO, CUBO, etc  ");
    console.log(`  ELEVAR LA BASE "${numBase}" A LA POTENCIA DE 1 A 5`); 
    multiplicarBaseXExp(numBase);
}

// función que devuelve la multiplicación un número por otro número
function multiplicarBaseXExp(numExp){
    for(let x = 1; x <= 5; x++ ){
        const factorizarBase = multiplicadorExp(x);
        console.log(`${numBase} ^ ${x} = ${factorizarBase(numExp)}`);
    }
}
