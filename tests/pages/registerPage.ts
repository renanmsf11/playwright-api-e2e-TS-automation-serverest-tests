import { expect, Page } from '@playwright/test';

export class RegisterPage {
  private randomId: number;
  private email: string;
  private password: string;
  private name: string;

  constructor(private page: Page) {
    this.randomId = Math.floor(Math.random() * 10000) + 1;
    this.email = `test${this.randomId}@test.com`;
    this.password = `test${this.randomId}`;
    this.name = 'John_Tester';
  }

  async verifyUrlRegisterPage() {
    await expect(this.page).toHaveURL('https://front.serverest.dev/cadastrarusuarios');
  }

  async clickCadastrar() {
    await expect(this.page.locator('[data-testid="cadastrar"]')).toBeVisible();
  }

  async createNewAccount() {
    await expect(this.page.locator('[data-testid="nome"]')).toBeVisible();
    await this.page.locator('[data-testid="nome"]').fill(this.name);

    await expect(this.page.locator('[data-testid="email"]')).toBeVisible();
    await this.page.locator('[data-testid="email"]').fill(this.email);

    await expect(this.page.locator('[data-testid="password"]')).toBeVisible();
    await this.page.locator('[data-testid="password"]').fill(this.password);

    await expect(this.page.locator('[data-testid="cadastrar"]')).toBeVisible();
    await this.page.locator('[data-testid="cadastrar"]').click();

    //keep this, it is important to wait for the page to load properly
    await this.page.waitForTimeout(1000);
  }

  getCredentialsLogin() {
    return {
      email: this.email,
      password: this.password,

    };
  }
}
