// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");
using System;

class Program
{
    private static Dictionary<string, string> usuarios = new Dictionary<string, string>
    {
        {"admin", "qwerty"},
        {"usuario", "pass"},
        {"test", "test"}
    };

    static void Main(string[] args)
    {
        // Mensaje de Bienvenida
        //Console.WriteLine("Hola mundo, aquí desde C#");
        //Console.WriteLine("Este es el programa oficial de Hola Mundo");
        //Console.WriteLine("Tienes que iniciar sesión");

        // Definir el usuario y la contraseña
        //string usuarioCorrecto = "admin";   
        //string passCorrecta = "qwerty";

        // Mensaje de Bienvenida
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesión");

        // Solicitar el usuario
        Console.WriteLine("Escribe tu usuario");
        string? usuarioIngresado = Console.ReadLine();

        // Solicitar la contraseña
        Console.WriteLine("Escribe tu contraseña");
        string? passIngresada = Console.ReadLine();

        // Lógica para validar el usuario y la contraseña
        if (usuarioIngresado != null)
        {
            if (usuarios.ContainsKey(usuarioIngresado) && usuarios[usuarioIngresado] == passIngresada)
            {
                Console.WriteLine("¡Bienvenido!. Inicio de sesión exitoso.");
                for (int i = 1; i <= 50; i++)
                {
                    Console.WriteLine($"{i}. ¡¡Hola {usuarioIngresado}, gracias por ingresar!!");
                }
                Console.WriteLine("\n Presiona Enter para salir del programa...");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine($"Usuario ({usuarioIngresado}) o contraseña ({passIngresada}) incorrectos, inténtalo de nuevo.");
                Console.WriteLine("\n Presiona Enter para salir del programa...");
                Console.ReadLine();
            }
        }
    }
}