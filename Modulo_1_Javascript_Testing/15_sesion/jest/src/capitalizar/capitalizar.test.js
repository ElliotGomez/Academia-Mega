const capitalizar = require('./capitalizar');

// TESTS para la función capitalizar que si son cadenas de texto
test('Capitalizar "hola" devuelve "Hola"', () => {
  expect(capitalizar('hola')).toBe('Hola');
});

test('Capitalizar JAVASCRIPT -> Javascript', () => {
  expect(capitalizar('JAVASCRIPT')).toBe('Javascript');
});

// ERROR porque no es una cadena de texto
test('Capitalizar 5 --> Error', () => {
  expect(() => capitalizar(5)).toThrow('El argumento debe ser una cadena de texto');
});


