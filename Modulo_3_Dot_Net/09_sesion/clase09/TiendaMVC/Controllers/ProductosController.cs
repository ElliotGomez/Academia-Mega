using Microsoft.AspNetCore.Mvc;
using TiendaMVC.Models;
using TiendaMVC.Services;
using System.Collections.Generic; 

namespace Tienda.Controllers
{
    public class ProductosController : Controller
    {
        /*private static readonly List<Producto> _producto = new() 
        {
            new Producto { Id = 1, Nombre = "Xiaomi 15 Ultra", Precio = 33000.00m},
            new Producto { Id = 2, Nombre = "HONOR Magic 7 Pro", Precio = 29000.00m}
        };*/
        private readonly IProductoApiService _api;
        public ProductosController(IProductoApiService api) => _api = api;

        // GET /Productos
        public async Task<IActionResult> Index()
        {
            var products = await _api.GetAllAsync();
            return View(products);
        }

        // GET /Productos/Datail
        public async Task<IActionResult> Details(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if(product == null) return NotFound();
            return View(product);
        }        
        
        // GET Productos/Create
        public IActionResult Create() => View();

        // POST Productos/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {
            if (!ModelState.IsValid) return View(producto);
            var created = await _api.CreateAsync(producto);
            if (created == null) 
            {
                // return NotFound();
                ModelState.AddModelError("", "Error al crear el producto");
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }

        //GET /Productos/Edit/4
        public async Task<IActionResult> Edit(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if(product == null) return NotFound();
            return View(product);            
        }

        //POST /Productos/Edit/4
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, Producto producto)
        {
            if(id != producto.Id) return BadRequest();
            if (!ModelState.IsValid) return View(producto);

            var ok = await _api.UpdateAsync(id, producto);
            if(!ok)
            {
                ModelState.AddModelError("", "Error al actualizar el producto");
                return View(producto);
            }
            return RedirectToAction(nameof(Index));
        }

        // GET: Productos/Delete/2
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _api.GetByIdAsync(id);
            if (product == null) return NotFound();
            return View(product);
        }

        // POST: Productos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var ok = await _api.DeleteAsync(id);
            if (!ok)
            {
                ModelState.AddModelError("", "Error al eliminar el producto");
                var product = await _api.GetByIdAsync(id);
                return View(product);
            }
            return RedirectToAction(nameof(Index));
        }        
    }
}