using System.Data.SqlClient;
using PrimeraAPI.Models;
using Microsoft.Extensions.Configuration;

namespace PrimeraAPI.Data
{
    public class ProductoService
    {
        private readonly string _connectionString;

        public ProductoService(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("TiendaDB"); // Obtiene la cadena de conexión desde el archivo appsettings.json
        }
        
        // Método para obtener todos los productos
        public async Task<List<Producto>> GetAllAsync()
            {
                var productList = new List<Producto>();
                using var conn = new SqlConnection(_connectionString);
                await conn.OpenAsync();
                using var cmd = new SqlCommand("Select * From Productos", conn);
                using var reader = await cmd.ExecuteReaderAsync();
                while (await reader.ReadAsync())
                    {
                        productList.Add(new Producto
                            {
                                Id = reader.GetInt32(0),
                                Nombre = reader.GetString(1),
                                Precio = reader.GetDecimal(2)
                            });
                    }
                return productList;
            }
        // Obtener un producto por Id
        public async Task<Producto> GetByIdAsync(int id)
            {
                using var conn = new SqlConnection(_connectionString);
                await conn.OpenAsync();
                using var cmd = new SqlCommand("SELECT * FROM Productos Where Id = @Id", conn);
                cmd.Parameters.AddWithValue("@Id", id);
                using var reader = await cmd.ExecuteReaderAsync();
                if (await reader.ReadAsync())
                    {
                        return new Producto
                            {
                                Id = reader.GetInt32(0),
                                Nombre = reader.GetString(1),
                                Precio = reader.GetDecimal(2)
                            };
                    }
                return null; // Si no se encuentra el producto, retorna null
            }  

        // Crear un nuevo producto
        public async Task<Producto> CreateAsync(Producto producto)
            {
                using var conn = new SqlConnection(_connectionString);
                await conn.OpenAsync();
                using var cmd = new SqlCommand("INSERT INTO Productos (Nombre, Precio) OUTPUT INSERTED.Id VALUES (@Nombre, @Precio)", conn);
                cmd.Parameters.AddWithValue("@Nombre", producto.Nombre);
                cmd.Parameters.AddWithValue("@Precio", producto.Precio);

                var id = (int) await cmd.ExecuteScalarAsync()!; // Ejecuta el comando y obtiene el Id del nuevo producto, el signo de admiración es la anulación de nullos
                producto.Id = id; // Asigna el Id al objeto producto
                return producto; // Retorna el producto creado  
            }
        
        // Actualizar un producto existente
        public async Task<bool> UpdateAsync(int id, Producto product)
            {
                using var conn = new SqlConnection(_connectionString);
                await conn.OpenAsync();
                using var cmd = new SqlCommand("UPDATE Productos SET Nombre = @Nombre, Precio = @Precio WHERE Id = @Id", conn);
                cmd.Parameters.AddWithValue("@Id", id);
                cmd.Parameters.AddWithValue("@Nombre", product.Nombre);
                cmd.Parameters.AddWithValue("@Precio", product.Precio);
                var affectedRows = await cmd.ExecuteNonQueryAsync();
                return affectedRows > 0; // Retorna el producto actualizado
            }   

        // Eliminar un producto existente
        public async Task<bool> DeleteAsync(int id)
            {
                using var conn = new SqlConnection(_connectionString);
                await conn.OpenAsync();
                using var cmd = new SqlCommand("DELETE FROM Productos WHERE Id = @Id", conn);
                cmd.Parameters.AddWithValue("@Id", id);
                var affectedRows = await cmd.ExecuteNonQueryAsync();
                return affectedRows > 0; // Retorna true si se eliminó el producto
            }
    }
}
