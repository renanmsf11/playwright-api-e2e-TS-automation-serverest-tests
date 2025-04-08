import { expect, Page } from '@playwright/test';


export class PurchaseStorePage {

  private searchBar: string;

  constructor(private page: Page) {

    this.searchBar = 'Logitech';
  }

  async typeInSearchBar() {
    await expect(this.page.locator('[data-testid="pesquisar"]')).toBeVisible();
    await this.page.locator('[data-testid="pesquisar"]').fill(this.searchBar);
  }

  async clickSearchButton() {
    await this.page.waitForTimeout(2000);
    await expect(this.page.locator('[data-testid="botaoPesquisar"]')).toBeVisible();
    await this.page.locator('[data-testid="botaoPesquisar"]').click()
  }

  async addProductToShopList() {
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('button', { name: 'Adicionar a lista' }).first().click();
  }

  async verifyUrlShopListPage() {
    await this.page.waitForTimeout(2000);
    await expect(this.page).toHaveURL('https://front.serverest.dev/minhaListaDeProdutos');

  }
  

  async verifySearchResults() {

    await expect(this.page.locator('[data-testid="product-detail-link"]').first()).toBeVisible();
    await this.page.waitForTimeout(2000);


    const target = this.page.locator('[data-testid="product-detail-link"]').first();

    await target.evaluate(el => {
      el.style.border = '2px solid red';
      el.style.boxShadow = '0 0 10px red';
    });

    await expect(target).toBeVisible();
    await this.page.waitForTimeout(2000);
  }

}