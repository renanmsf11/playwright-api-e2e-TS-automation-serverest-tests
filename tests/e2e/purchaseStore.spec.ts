import { test } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { RegisterPage } from '@pages/registerPage';
import { PurchaseStorePage } from '@pages/purchaseStorePage';

test.beforeEach(async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page, registerPage);

  await loginPage.goto();
  await loginPage.clickCadastrarLoginPage();
  await registerPage.createNewAccount();
  await loginPage.goto();
  await loginPage.loginFromRegister();
  await loginPage.verifyUrlHomePage();
});

test('User search for product in "Serverest" store', async ({ page }) => {
  const purchaseStorePage = new PurchaseStorePage(page);

  await purchaseStorePage.typeInSearchBar();
  await purchaseStorePage.clickSearchButton();
  await purchaseStorePage.verifySearchResults();
});

test('User add product to "Shop List" and is redirected to "Shop List" page', async ({ page }) => {
  const purchaseStorePage = new PurchaseStorePage(page);

  await purchaseStorePage.addProductToShopList();
  await purchaseStorePage.verifyUrlShopListPage();
});
