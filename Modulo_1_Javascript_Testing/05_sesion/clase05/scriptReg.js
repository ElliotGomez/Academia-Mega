function enviarDatos() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const genero = document.getElementById('genero').value;
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const confirmar = document.getElementById('confirmar').value;
    const fecha = document.getElementById('fecha').value;

    if (password !== confirmar) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    const datos = {
        Nombre: nombre,
        Edad: edad,
        Email: email,
        Teléfono: telefono,
        Género: genero,
        Usuario: usuario,
        FechaNacimiento: fecha
    };

    //console.log('Datos enviados:', datos);
    alert('Datos enviados correctamente.');
    // Crear un contenedor para mostrar la información
    const resultadoDiv = document.createElement('div');
    document.body.appendChild(resultadoDiv);
    resultadoDiv.innerHTML += "<br> NOMBRE : " + datos.Nombre + "<br>";
    resultadoDiv.innerHTML += "EDAD : " + datos.Edad + "<br>";
    resultadoDiv.innerHTML += "EMAIL : " + datos.Email + "<br>";
    resultadoDiv.innerHTML += "TELÉFONO : " + datos.Teléfono + "<br>";
    resultadoDiv.innerHTML += "SEXO : " + datos.Género + "<br>";
    resultadoDiv.innerHTML += "USUARIO : " + datos.Usuario + "<br>";
    resultadoDiv.innerHTML += "FECHA DE NACIMIENTO: " + datos.FechaNacimiento + "<br><hr>";
}