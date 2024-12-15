class SearchPage {
    constructor(page) {
      // Inicializa a classe com a página do Playwright.
      this.page = page;
  
      // Localizador para o título principal da página de resultados.
      this.firstHeading = page.locator('#firstHeading');
  
      // Localizador para o bloco de resumo do conteúdo principal.
      this.summaryBlock = page.locator('#mw-content-text');
    }
  
    async getHeading() {
      // Retorna o texto do título principal da página.
      return await this.firstHeading.textContent();
    }
  
    async verifySummaryBlock() {
      // Verifica se o bloco de resumo está visível na página.
      return await this.summaryBlock.isVisible();
    }
  }
  
  // Exporta a classe para que possa ser usada em outros arquivos.
  module.exports = { SearchPage };
  