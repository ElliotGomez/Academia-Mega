// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
﻿using System;
using System.ComponentModel;
using System.Text;



class Program
    {
        private static Dictionary<string, string> usuarios = new Dictionary<string, string>
            {
                {"admin", "qwerty"},
                {"usuario", "pass"},
                {"test", "test"}
            };

        // Constante, define el número máximo de intentos de inicio de sesión
        private const int MAX_ATTEMPTS = 3;

        // static void Main(string[] args)
        //     {
        //         // Mensaje de Bienvenida
        //         //Console.WriteLine("Hola mundo, aquí desde C#");
        //         //Console.WriteLine("Este es el programa oficial de Hola Mundo");
        //         //Console.WriteLine("Tienes que iniciar sesión");

        //         // Definir el usuario y la contraseña
        //         //string usuarioCorrecto = "admin";   
        //         //string passCorrecta = "qwerty";

        //         // Mensaje de Bienvenida
        //         Console.WriteLine("Este es el programa oficial de Hola Mundo");
        //         Console.WriteLine("Tienes que iniciar sesión");

        //         // Solicitar el usuario
        //         Console.WriteLine("Escribe tu usuario");
        //         string? usuarioIngresado = Console.ReadLine();

        //         // Solicitar la contraseña
        //         Console.WriteLine("Escribe tu contraseña");
        //         string? passIngresada = Console.ReadLine();

        //         // Lógica para validar el usuario y la contraseña
        //         //  TODO
        //         //     Número máximo de intentos
        //         //     Lea la contraseña sin mostrarla
        //         //     Mostrar información del usuario loggeado
                
        //         if (usuarioIngresado != null)
        //         {
        //             if (usuarios.ContainsKey(usuarioIngresado) && usuarios[usuarioIngresado] == passIngresada)
        //             {
        //                 Console.WriteLine("¡Bienvenido!. Inicio de sesión exitoso.");
        //                 for (int i = 1; i <= 50; i++)
        //                 {
        //                     Console.WriteLine($"{i}. ¡¡Hola {usuarioIngresado}, gracias por ingresar!!");
        //                 }
        //                 Console.WriteLine("\n Presiona Enter para salir del programa...");
        //                 Console.ReadLine();
        //             }
        //             else
        //             {
        //                 Console.WriteLine($"Usuario ({usuarioIngresado}) o contraseña ({passIngresada}) incorrectos, inténtalo de nuevo.");
        //                 Console.WriteLine("\n Presiona Enter para salir del programa...");
        //                 Console.ReadLine();
        //             }
        //         }
        //     }

        //     private static string ReadPassword()
        //     {
        //         StrinBuilder password = new StrinBuilder();
        //         ConsoleKeyInfo keyInfo;

        //         do 
        //             {
        //                 keyInfo = Console.ReadKey(true);
        //                 if(!char.IsControl(keyInfo.Keychar))
        //                     {
        //                         password.Append
        //                     }
        //                 else if(keyInfo.Key == ConsoleKey.Backspace && password.Length > 0)
        //                     {
        //                         password.Remove(password.Length - 1, 1);
        //                         Console.Write("\b \b");
        //                     }
        //             } 
        //         while(keyInfo.Key != ConsleKey.Enter);

        //         Console.WriteLine();
        //         return password.ToString();
        //     }
            static void Main(string[] args)
            {
                // Mensajes iniciales en consola
                Console.WriteLine("Este es el programa oficial de Hola Mundo");
                Console.WriteLine("Tienes que iniciar sesión");

                // Invitación al usuario para que escriba su nombre
                Console.WriteLine("Escribe tu usuario");

                // Llamada al método que gestiona el login. Devuelve el usuario si accede correctamente, o null si falla.
                string? usuarioIngresado = TryLogin();

                // Si TryLogin devolvió un nombre (no null), saludamos; si no, avisamos de que se excedieron los intentos.
                if (usuarioIngresado != null)
                    {
                        Console.WriteLine($"Hola {usuarioIngresado}");
                    } 
                else 
                    {
                        Console.WriteLine("Has excedido el número máximo de intentos");
                    }

                // Esperamos a que el usuario presione Enter antes de cerrar la consola
                Console.WriteLine("Presiona Enter para salir");
                Console.ReadLine();
            }

        /// <summary>
        /// Método que controla el proceso de login:
        ///    - Permite MAX_ATTEMPTS intentos.
        ///    - Pide nombre de usuario y contraseña.
        ///    - Valida contra el diccionario `usuarios`.
        ///    - Retorna el nombre de usuario si es válido, o null si se acaban los intentos.
        /// </summary>
        private static string? TryLogin()
            {
                // Inicializamos los intentos restantes
                int intentosRestantes = MAX_ATTEMPTS;

                // Bucle que repite mientras queden intentos
                while (intentosRestantes > 0)
                    {
                        Console.WriteLine($"\nIntentos restantes: {intentosRestantes}");
                        Console.Write("Ingresa tu nombre de usuario: ");
                        string? userLogged = Console.ReadLine();            // Leemos usuario

                        Console.WriteLine("Escribe tu contraseña: ");
                        string? passIngresada = ReadPassword();            // Leemos contraseña oculta

                        // Validación de campos vacíos
                        if (string.IsNullOrWhiteSpace(userLogged) || string.IsNullOrWhiteSpace(passIngresada))
                            {
                                Console.WriteLine("\nError: El usuario y contraseña no pueden estar vacios.");
                                intentosRestantes--;   // descontamos un intento
                                continue;              // volvemos al inicio del bucle
                            }

                        // Verificamos que el usuario exista y la contraseña coincida
                        if (usuarios.ContainsKey(userLogged) && usuarios[userLogged] == passIngresada)
                            {
                                Console.WriteLine("\n¡ACCESO CONCEDIDO!");
                                return userLogged;     // login exitoso: devolvemos el nombre
                            }
                        else 
                            {
                                // Datos incorrectos: restamos intento y seguimos
                                Console.WriteLine($"Contraseña ({passIngresada}) y/o usuario ({userLogged}) incorrectos");
                                Console.WriteLine("\nInténtalo de nuevo...");
                                intentosRestantes--;
                            }
                    }

                // Si salimos del bucle sin éxito, devolvemos null
                return null;
            }

        /// <summary>
        /// Método que lee la contraseña caracter por caracter:
        ///    - Muestra '*' por cada carácter ingresado.
        ///    - Permite borrar con Backspace.
        ///    - Finaliza al presionar Enter y retorna la cadena.
        /// </summary>
        private static string? ReadPassword()
            {
                StringBuilder password = new StringBuilder();
                ConsoleKeyInfo keyInfo;

                // Bucle que continúa hasta detectar Enter
                do
                    {
                        // Leemos tecla sin mostrarla en pantalla (true para interceptar)
                        keyInfo = Console.ReadKey(true);

                        // Si no es tecla de control (letra, número, símbolo...), la agregamos
                        if (!char.IsControl(keyInfo.KeyChar))
                            {
                                password.Append(keyInfo.KeyChar);
                                Console.Write("*");  // mostramos asterisco
                            }
                        // Si es Backspace y hay caracteres, borramos el último
                        else if (keyInfo.Key == ConsoleKey.Backspace && password.Length > 0)
                            {
                                password.Remove(password.Length - 1, 1);
                                Console.Write("\b \b");  // movemos cursor, borramos '*' y retrocedemos
                            }
                    }
                // Seguimos hasta que el usuario presione Enter
                while (keyInfo.Key != ConsoleKey.Enter);

                Console.WriteLine();  // pasamos a la siguiente línea
                return password.ToString();
            }
    }






