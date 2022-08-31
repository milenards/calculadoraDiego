const subtracao = require('../src/javascript/subtracao');

test('subtração de 2 - 1 é igual a 1', () => {
  expect(subtracao(2, 1)).toBe(1);
});