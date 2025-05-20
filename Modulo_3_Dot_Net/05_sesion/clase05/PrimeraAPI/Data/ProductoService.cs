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
        /*public async Task<Producto> GetByIdAsync(int id)
            {

            }  

        // Crear un nuevo producto
        public async Task<Producto> CreateAsync(Producto producto)
            {

            }
        
        // Actualizar un producto existente
        public async Task<Producto> UpdateAsync(int id, Producto actualizado)
            {

            }

        // Eliminar un producto existente
        public async Task<Producto> DeleteAsync(int id)
            {

            }*/
    }
}    