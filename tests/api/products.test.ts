import { test, expect, request } from '@playwright/test';

test('GET /produtos - listar produtos (200)', async () => {
  const api = await request.newContext({
    baseURL: 'https://serverest.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const response = await api.get('/produtos');
  expect(response.status()).toBe(200);

  const body = await response.json();
  const produtos = body.produtos;

  console.log('📦 Produtos encontrados:');
  produtos.forEach((produto, index) => {
    console.log(`\nProduto ${index + 1}`);
    console.log(`ID: ${produto._id}`);
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Descrição: ${produto.descricao}`);
    console.log(`Quantidade: ${produto.quantidade}`);
  });
});
