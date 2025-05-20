using Microsoft.AspNetCore.Mvc;
using PrimeraAPI.Models;
using PrimeraAPI.Data;

namespace PrimeraAPI.Controllers
    {
        [ApiController]
        [Route("api/[controller]")] // all/
        public class ProductosController : ControllerBase
            {
                // Aquí sería la lectura de datos en BD
                private readonly ProductoService _service;
                public ProductosController(ProductoService productoService)
                    {
                        _service = productoService;
                    }

                /*
                    - CREATE -
                */
                [HttpPost] // POST /api/productos
                public async Task<ActionResult<Producto>> Create (Producto nuevo)
                    {
                        var created = await _service.CreateAsync(nuevo);
                        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
                    }

                /*
                    - READ -
                */
                [HttpGet] // api/productos
                public async Task<IActionResult> GetAll()
                    {
                        var lista = await _service.GetAllAsync();
                        if(lista == null || lista.Count == 0) return NotFound();
                        return Ok(lista);
                    }

                [HttpGet("{id}")] // GET/api/productos/1
                public async Task<ActionResult<Producto>> GetById(int id)
                    {
                        var product = await _service.GetByIdAsync(id);
                        if(product == null) return NotFound();
                        return Ok(product);
                    }

                /*
                    - UPDATE -
                */
                [HttpPut("{id}")] // PUT /api/productos/1
                public async Task<IActionResult> Update(int id, Producto actualizado)
                    {
                        var updated = await _service.UpdateAsync(id, actualizado);
                        if(!updated) return NotFound();
                        return NoContent();
                    }

                /*
                    - DELETE -
                */                
                [HttpDelete("{id}")] // DELETE /api/productos/1
                public async Task<IActionResult> Delete(int id)
                    {
                        var deleted = await _service.DeleteAsync(id);
                        if(!deleted) return NotFound();
                        return NoContent(); // Si se eliminó correctamente, retorna NoContent (204)
                    }       
            }
    }

