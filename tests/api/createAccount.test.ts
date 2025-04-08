import { test, expect, request } from '@playwright/test';

test('POST /usuarios - criar novo usuário (201)', async () => {
  const api = await request.newContext({
    baseURL: 'https://serverest.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Gera número aleatório para email único
  const random = Math.floor(Math.random() * 100000);
  const email = `testeqa${random}@qa.com`;

  const newUser = {
    nome: 'teste',
    email,
    password: 'teste',
    administrador: 'true',
  };

  const response = await api.post('/usuarios', { data: newUser });

  expect(response.status()).toBe(201);
  const body = await response.json();
  console.log('Usuário criado:', body);
  console.log('📧 Email:', email);
  console.log('🔐 Senha:', newUser.password);

});