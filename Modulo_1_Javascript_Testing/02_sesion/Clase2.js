const miTitulo = document.querySelector('h1');
let intentos = 0;
let maxIntentos = 3
let restantes = 0
let claveCorrecta = "1234";
let claveIngresada;

while(intentos < maxIntentos){
    claveIngresada = prompt("Ingresa la contraseña por favor");

    if(claveIngresada === claveCorrecta){
        miTitulo.textContent = '¡ACCESO CONCEDIDO, BIENVENIDO AL SISTEMA!'
        break;
    } else{
        restantes = maxIntentos - (intentos + 1)
        // condicional (ternario)
        alert("Contraseña Incorrecta" + (restantes > 0 ? ", te quedan " + restantes + " intento(s)": ". Has agotado tus intentos."));
    }
    intentos ++;
}

if(intentos === maxIntentos){
    alert("Contacta al administrador para restablecer tu contraseña.")
    miTitulo.textContent = '¡ACCESO DENEGADO!'
}
