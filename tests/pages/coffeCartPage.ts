import { expect, Page } from '@playwright/test';
import { test } from '@playwright/test';
export class CoffeCartPage {

  constructor(private page: Page) {
  }

  async goto() {
    await this.page.goto('https://coffee-cart.app/');
  }

  async addCoffeToCart() {
    await this.page.locator('[data-test="Mocha"]').click()
  }

  async validateCoffeInCartPage() {
    await this.page.locator('a[href="/cart"]').click();


 //this is the loop that checks the text Mocha until finds it   

    const mochaCount = this.page.locator('text=Mocha');
    const count = await mochaCount.count();

for (let i = 0; i < count; i++) {
  const element = mochaCount.nth(i);
  if (await element.isVisible()) {
    await expect(element).toBeVisible();
    console.log({i}); //this is the index of the element that is visible
    const productTitle = await element.innerText();
    console.log(`Product found: ${productTitle}`);
    break;
  }
}
await expect(this.page.locator('[data-v-8965af83]').nth(1)).toBeVisible(); //the first element is the product Mocha
// await expect(this.page.locator('//html/body/div[1]/div[2]/div/ul/li[2]/div[1]')).toBeVisible(); - this is the xpath directly

  }
}