const esPar = require('./esPar.js');

test('El 2 es par', () => {
    expect(esPar(2)).toBe(true);
});

test('El 5 no es par', () => {
    expect(esPar(5)).toBe(false);
});

/* ESTE DARÁ ERROR
test('El 6 no es par', () => {
    expect(esPar(6)).toBe(false);
});
*/