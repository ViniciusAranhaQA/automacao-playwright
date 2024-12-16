class Homepage {
    constructor(page) {
      // Inicializa a classe com a página do Playwright.
      this.page = page;
  
      // Localizador para o campo de busca.
      this.searchInput = page.locator('input[name="search"]');
  
      // Localizador para o botão de busca.
      this.searchButton = page.locator('button[type="submit"]');
  
      // Localizador para o logotipo principal da página.
      this.logo = page.locator('.central-textlogo-wrapper');
    }
    async search(term) {
      // Preenche o campo de busca com o termo fornecido.
      await this.searchInput.fill(term);
  
      // Clica no botão de busca para realizar a pesquisa.
      await this.searchButton.click();
    }  
    async open() {
      // Navega para a URL base definida no Playwright (homepage da Wikipedia).
      await this.page.goto('/');
    }
  
   
  }
  
  // Exporta a classe para que possa ser usada em outros arquivos.
  module.exports = { Homepage };
  