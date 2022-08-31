const multiplicacao = require('../src/javascript/multiplicacao');

test('multiplicar de 2 * 2 é igual a 4', () => {
  expect(multiplicacao(2, 2)).toBe(4);
});