// calculadora.test.js
const { somar } = require("../src/calculadora");

test("soma 1 + 2 para ser igual a 3", () => {
  expect(somar(1, 2)).toBe(3);
});

test("soma -1 + 1 para ser igual a 0", () => {
  expect(somar(-1, 1)).toBe(0);
});

test("soma 0.1 + 0.2 para ser aproximadamente igual a 0.3", () => {
  expect(somar(0.1, 0.2)).toBeCloseTo(0.3);
});

//Exemplo que o Código não passa:
// const { multiplicacao } = require("./src/calculadora");

// test("multiplicação 2 * 3 para ser igual a 6", () => {
//   expect(multiplicacao(2, 3)).toBe(6);
// });
