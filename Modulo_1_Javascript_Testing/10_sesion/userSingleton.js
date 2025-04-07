const userSingleton = (function () {
    let instance = null;

    function createInstance() {
        let user = null;

        return {
            setUser: function (username) {
                user = username;
                console.log(`Usuario establecido: ${user}`);
            },
            getUser: function () {
                return user;
            },
            clearUser: function () {
                user = null;
                console.log("SESIÓN CERRADA.!!");
            },
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        setUser: function (username) {
            this.getInstance().setUser(username);
        },
        getUser: function () {
            return this.getInstance().getUser();
        },
        clearUser: function () {
            this.getInstance().clearUser();
        },
    };
})();