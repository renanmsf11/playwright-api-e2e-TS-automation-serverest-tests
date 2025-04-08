import { test } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import { RegisterPage } from '../pages/RegisterPage';

import { RegisterPage } from '@pages/registerPage';
import { LoginPage } from '@pages/loginPage';

test('User login in serverest and is redirected to the home page', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page, registerPage);

  await loginPage.goto();
  await loginPage.clickCadastrarLoginPage();
  await registerPage.createNewAccount();
  await loginPage.goto();
  await loginPage.loginFromRegister();
  await loginPage.verifyUrlHomePage();
});

test('User login in serverest with invalid credentials', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page, registerPage);

  await loginPage.goto();
  await loginPage.loginWithInvalidCredentials();
  await loginPage.verifyErrorMessageLogin();
});