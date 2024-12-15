// Importa os módulos de teste do Playwright e a classe Homepage.
const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/Homepage');

test.describe('Wikipedia Homepage', () => {
  // Teste para verificar se os elementos principais estão presentes na página inicial.
  test('Verificar elementos principais na Homepage', async ({ page }) => {
    // Cria uma instância da classe Homepage.
    const homepage = new Homepage(page);

    // Abre a página inicial da Wikipedia.
    await homepage.open();

    // Verifica se o logotipo está visível na página.
    await expect(homepage.logo).toBeVisible();

    // Verifica se o campo de busca está visível.
    await expect(homepage.searchInput).toBeVisible();

    // Verifica se o botão de busca está visívelgit
    await expect(homepage.searchButton).toBeVisible();
  });
});
