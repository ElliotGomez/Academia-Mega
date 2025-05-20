using PrimeraAPI.Data;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddScoped<ProductoService>();
var app = builder.Build();
// app.MapGet("/saludo", () => "Hola Mundo, esta es mi primera API");
app.UseHttpsRedirection();
app.MapControllers();
app.Run();
