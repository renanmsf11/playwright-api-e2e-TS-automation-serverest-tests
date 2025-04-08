import { test } from '@playwright/test';
import { CoffeCartPage } from '@pages/coffeCartPage';

test('User add a "Coffe" to the cart and validate "Name" and "Price" for the product', async ({ page }) => {
    const coffeCartPage = new CoffeCartPage(page);
    await coffeCartPage.goto();

    await coffeCartPage.addCoffeToCart();

    await coffeCartPage.validateCoffeInCartPage();
  });