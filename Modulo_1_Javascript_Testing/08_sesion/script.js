        // Función para obtener datos de la PokeAPI
        async function obtenerPokemones() {
            const contenedor = document.getElementById("pokemonContainer"); // Obtener el contenedor del DOM
            contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos

            for (let i = 1; i <= 300; i++) {
                try {
                    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`; // URL de la API para cada Pokémon
                    const respuesta = await fetch(pokemonUrl); // Llamada a la API
                    if (!respuesta.ok) {
                        throw new Error("Error en la respuesta de la API"); // Lanzar un error si no es correcta
                    }
                    console.log(respuesta); // Mostrar la respuesta en la consola para depuración
                    const datos = await respuesta.json(); // Conversión de la respuesta a JSON
                    console.log(datos); // Mostrar los datos en la consola para depuración
                    // Crear un elemento para mostrar el Pokémon
                    const pokemonElemento = document.createElement("div");
                    pokemonElemento.classList.add("pokemon");
                    pokemonElemento.innerHTML = `
                        <img src="${datos.sprites.front_default}" alt="${datos.name}">
                        <h2>${datos.name}</h2>
                        <p>Tipo: ${datos.types.map(type => type.type.name).join(", ")}</p>
                        <p>Experiencia: ${datos.base_experience}</p>
                        <p class = "estadistica">Habilidades: ${datos.abilities.map(ability => ability.ability.name).join(", ")}</p>
                        <p class = "estadistica">Estadísticas: ${datos.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}</p>
                    `;
                    contenedor.appendChild(pokemonElemento); // Agregar el Pokémon al contenedor
                } catch (error) {
                    console.error("Error al obtener los datos:", error); // Manejo de errores
                }
            }
        }

        // Llamada a la función para obtener los Pokémon
        obtenerPokemones();