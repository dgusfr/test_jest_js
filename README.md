# Testes com Jest JS

## Este projeto tem como objetivo a implementação de testes unitários com a biblioteca Jest do JavaScript.

<div align="left">
  <img src="img/logo.png" alt="Descrição da imagem" style="width: 100px; height: auto;">
</div>

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/html.png" alt="Logo HTML" width="100"/>
  </div>
  <div style="display: flex; justify-content: flex-center;">
    <img src="img/css.png" alt="Logo CSS" width="100"/>
  </div>
  <div style="display: flex; justify-content: flex-end;">
    <img src="img/js.png" alt="Logo CSS" width="100"/>
  </div>
</div>

## Status

<!-- ![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge) -->

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição detalhada

Este repositório contém testes Jest para uma calculadora simples implementada em JavaScript. O módulo da calculadora está localizado no arquivo `src/calculadora.js`. O objetivo principal desses testes é garantir a correção da função `somar` dentro do módulo da calculadora.

## Funcionalidades

- Teste para Adição
- Teste para Adição com Números Negativos
- Teste para Adição com Números de Ponto Flutuante

#### Caso de Acerto:

<p align="center">
  <img width="400" src="img/test1.png" alt="Teste 1">
</p>

#### Caso de Erro:

<p align="center">
  <img width="400" src="img/test2.png" alt="Teste 2">
</p>

## Como Usar

Certifique-se de executar os testes usando o Jest para garantir o comportamento correto da função `somar`.

## Estrutura do Projeto

- `calculadora.test.js`:

  - Teste: "soma 1 + 2 para ser igual a 3"
  - Código: `expect(somar(1, 2)).toBe(3);`
  - Descrição: Verifica se a soma de 1 e 2 é igual a 3.

- `calculadora.test.js`:

  - Teste: "soma -1 + 1 para ser igual a 0"
  - Código: `expect(somar(-1, 1)).toBe(0);`
  - Descrição: Testa a adição de -1 e 1 para garantir que seja igual a 0.

- `calculadora.test.js`:
  - Teste: "soma 0.1 + 0.2 para ser aproximadamente igual a 0.3"
  - Código: `expect(somar(0.1, 0.2)).toBeCloseTo(0.3);`
  - Descrição: Verifica se a soma de 0.1 e 0.2 é aproximadamente igual a 0.3.

## Autor

Desenvolvido por Diego Franco.
