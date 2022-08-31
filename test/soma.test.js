const soma = require('../src/javascript/soma');

test('soma de 1 + 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});


test('soma de numeros negativos -10 + -20 é igual a -30', () => {
  expect(soma(-10, -20)).toBe(-30);
});


test('soma de valor zerado', () => {
  expect(soma(0, 0)).toBe(0);
});