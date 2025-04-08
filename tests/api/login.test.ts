import { test, expect, request } from '@playwright/test';

test('POST /login - autenticar com usuário recém-criado (200)', async () => {
  const api = await request.newContext({
    baseURL: 'https://serverest.dev',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Criar usuário com email aleatório
  const random = Math.floor(Math.random() * 100000);
  const email = `testeqa${random}@qa.com`;
  const user = {
    nome: 'teste',
    email,
    password: 'teste',
    administrador: 'true',
    
  };

  const createRes = await api.post('/usuarios', { data: user });
  expect(createRes.status()).toBe(201);

  console.log(`🔐 Logando com o usuário: ${user.email} | Senha: ${user.password}`);

  // Fazer login com o mesmo usuário
  const loginRes = await api.post('/login', {
    data: {
      email: user.email,
      password: user.password,
      
    },
  });

  expect(loginRes.status()).toBe(200);
  const body = await loginRes.json();
  console.log('Token recebido:', body.authorization);
});