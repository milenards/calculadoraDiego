const divisao = require('../src/javascript/divisao');

test('divisao de 10 / 2 é igual a 5', () => {
  expect(divisao(10, 2)).toBe(5);
});