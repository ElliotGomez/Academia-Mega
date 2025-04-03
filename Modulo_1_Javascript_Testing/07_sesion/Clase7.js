function obtenerUsuario(id) {
    try {
        // Verificar si el ID es un número
        if (typeof id !== "number") throw new Error("El ID debe ser un número");

        // Base de datos simulada de usuarios
        const usuarios = { 1: "Alma", 2: "Carlos", 3: "Jesús" };

        // Verificar si el usuario existe
        if (!usuarios[id]) throw new Error("Usuario no encontrado");

        // Retornar el usuario encontrado
        return `Usuario encontrado: ${usuarios[id]}`;
    } catch (error) {
        // Manejo de errores
        console.error("Error:", error.message);
        return null;
    }
}

// Pruebas de la función
console.log(obtenerUsuario(2)); // Usuario encontrado: Carlos
console.log(obtenerUsuario(3)); // Usuario encontrado: Jesús
console.log(obtenerUsuario(1)); // Usuario encontrado: Alma
console.log(obtenerUsuario(8)); // Error: Usuario no encontrado
console.log(obtenerUsuario("a")); // Error: El ID debe ser un número
console.log(obtenerUsuario(".")); // Error: El ID debe ser un número
console.log(obtenerUsuario(-3)); // Error: Usuario no encontrado