const authModule = (function () {
    const validUser = "admin";
    const validPassword = "1234";

    function login(username, password) {
        if (username === validUser && password === validPassword) {
            console.log("Inicio de sesión exitoso.");
            userSingleton.setUser(username);
            return true;
        } else {
            console.error("Usuario o contraseña incorrectos.");
            return false;
        }
    }

    function logout() {
        console.log("Cerrando sesión...");
        userSingleton.clearUser();
    }

    function isAuthenticated() {
        return userSingleton.getUser() !== null;
    }

    function getCurrentUser() {
        return userSingleton.getUser();
    }

    return {
        login,
        logout,
        isAuthenticated,
        getCurrentUser,
    };
})();