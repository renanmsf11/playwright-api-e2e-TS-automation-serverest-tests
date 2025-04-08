import { expect, Page } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';


export class LoginPage {
  
  constructor(private page: Page, private registerPage: RegisterPage) {
  }

  async goto() {
    await this.page.goto('https://front.serverest.dev/login');
  }
  async verifyUrlHomePage() {
    await expect(this.page).toHaveURL('https://front.serverest.dev/home');
  }

  async clickCadastrarLoginPage() {
    await expect(this.page.locator('[data-testid="cadastrar"]')).toBeVisible();
    await this.page.locator('[data-testid="cadastrar"]').click();
  }

  async loginFromRegister() {
    const { email, password } = this.registerPage.getCredentialsLogin();
    await expect(this.page.locator('[data-testid="email"]')).toBeVisible();
    await this.page.locator('[data-testid="email"]').fill(email);

    await expect(this.page.locator('[data-testid="senha"]')).toBeVisible();
    await this.page.locator('[data-testid="senha"]').fill(password);

    await expect(this.page.locator('[data-testid="entrar"]')).toBeVisible();
    await this.page.locator('[data-testid="entrar"]').click();
  }

  async loginWithInvalidCredentials() {
    await expect(this.page.locator('[data-testid="email"]')).toBeVisible();
    await this.page.locator('[data-testid="email"]').fill('testInvalid@test.com');

    await expect(this.page.locator('[data-testid="senha"]')).toBeVisible();
    await this.page.locator('[data-testid="senha"]').fill('invalidPassword');

    await expect(this.page.locator('[data-testid="entrar"]')).toBeVisible();
    await this.page.locator('[data-testid="entrar"]').click();
  }

  async verifyErrorMessageLogin() {

    await expect(this.page.getByText('Email e/ou senha inválidos')).toBeVisible();
  }

}


