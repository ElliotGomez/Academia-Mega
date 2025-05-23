using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class SaludoController : ControllerBase
    {
        // GET /saludo
        [HttpGet]
        public IActionResult Get()
            {
                return Ok(new { mensaje = "¡Hola Mundo desde el SaludoController!" });
            }
        [HttpGet("personalizado/{nombre}")]
        //GET /saludo/personalizado/{name}
        public IActionResult GetPersonalizado(string nombre)
            {
                var respuesta = new
                    {
                        mensaje = $"¡Holaaa!, {nombre}"
                    };
                return Ok(respuesta);
            }

    }