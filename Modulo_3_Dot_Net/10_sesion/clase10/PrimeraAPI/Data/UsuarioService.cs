using System.Security.Cryptography;
using System.Text;
using PrimeraAPI.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Data.SqlClient;

namespace PrimeraAPI.Data
{
    public class UsuarioService
    {
        private readonly string _connectionString;

        public UsuarioService(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("TiendaDB");
        }
        
        // Función para hashear la contraseña
        private string Hash(string pass)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(pass));          
            return Convert.ToBase64String(bytes);
        }

        // Método para obtener todos los usuarios
        public async Task<bool> RegistroAsync(string username, string password)
        {
            var hash = Hash(password);
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            using var cmd = new SqlCommand("INSERT INTO Usuarios (NombreUsuario, PasswordHash) VALUES (@user, @pass)", conn);
            cmd.Parameters.AddWithValue("@user", username);
            cmd.Parameters.AddWithValue("@pass", hash);
            try
            {
                await cmd.ExecuteNonQueryAsync();
                return true; // Retorna true si se insertó correctamente
            }
            catch (SqlException ex) when (ex.Number == 2627) // Error de clave duplicada
            {
                return false; // Retorna false si el usuario ya existe
            }
        }
    }
}