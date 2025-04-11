function capitalizar(texto) {
  if (typeof texto !== 'string') {
    throw new Error('El argumento debe ser una cadena de texto');
  }
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

module.exports = capitalizar;