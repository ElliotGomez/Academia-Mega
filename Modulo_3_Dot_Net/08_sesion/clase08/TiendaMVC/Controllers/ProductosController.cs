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
        
        // GET Productos/Create
        public IActionResult Create() => View();

        // POST Productos/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Producto producto)
        {
            if (!ModelState.IsValid) return View(producto);
            var product = await _api.CreateAsync(producto);
            if (product == null) return NotFound();
            return RedirectToAction("Index");
        }


        // public IActionResult Details(int id)
        // {
        //     var product = _producto.FirstOrDefault(p => p.Id == id); 
        //     if  (product == null)
        //         return NotFound();
        //     return View(product);
        // }
    }
}