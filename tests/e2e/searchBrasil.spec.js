// Importa os módulos de teste do Playwright e as classes Homepage e SearchPage.
const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/Homepage');
const { SearchPage } = require('../../pages/SearchPage');

test.describe('Wikipedia Search', () => {
  // Teste para buscar "Brasil" e validar os principais blocos da página de resultados.
  test('Buscar por "Brasil" e validar conteúdo', async ({ page }) => {
    // Cria uma instância da classe Homepage.
    const homepage = new Homepage(page);

    // Cria uma instância da classe SearchPage.
    const searchPage = new SearchPage(page);

    // Abre a página inicial da Wikipedia.
    await homepage.open();

    // Realiza a busca pelo termo "Brasil".
    await homepage.search('Brasil');

    // Obtém o título principal da página de resultados.
    const heading = await searchPage.getHeading();

    // Verifica se o título contém a palavra "Brasil".
    expect(heading).toContain('Brazil');

    // Verifica se o bloco de resumo está visível na página de resultados.
    const isSummaryVisible = await searchPage.verifySummaryBlock();
    expect(isSummaryVisible).toBeTruthy();
  });
});
