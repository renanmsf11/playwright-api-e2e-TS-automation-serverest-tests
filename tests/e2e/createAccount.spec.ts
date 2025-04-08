import { test } from '@playwright/test';
// import { RegisterPage } from '../pages/RegisterPage';
// import { LoginPage } from '../pages/LoginPage';

import { RegisterPage } from '@pages/registerPage';
import { LoginPage } from '@pages/loginPage';

let loginPage: LoginPage;
let registerPage: RegisterPage;

test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  loginPage = new LoginPage(page, registerPage);

  await loginPage.goto();
  await loginPage.clickCadastrarLoginPage();
});

test('User validates that is possible to click "Register" button and is redirected to "Create account" page', async () => {
  await registerPage.verifyUrlRegisterPage();
});

test('User creates new account', async () => {
  await registerPage.createNewAccount();
  await loginPage.verifyUrlHomePage();
});