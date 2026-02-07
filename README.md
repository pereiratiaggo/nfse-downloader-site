# Baixa NFS-e - Landing Page

Uma página web simples e responsiva para disponibilizar o download do app Baixa NFS-e no GitHub Pages.

## Características

- ✨ Design moderno e responsivo
- 📱 Totalmente compatível com dispositivos móveis
- ⚡ Carregamento rápido (arquivos estáticos)
- 🎨 Tema azul profissional
- 🔧 Fácil de customizar

## Estrutura dos Arquivos

```
.
├── index.html      # Página principal
├── style.css       # Estilos CSS
├── script.js       # Funcionalidades JavaScript
├── .gitignore      # Arquivos ignorados pelo Git
└── README.md       # Este arquivo
```

## Como Usar

### Localmente

1. Abra o arquivo `index.html` diretamente no navegador
2. Ou use um servidor local (Python, Node.js, etc.)

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

### No GitHub Pages

1. Faça push dos arquivos para um repositório GitHub
2. Vá em: **Settings** → **Pages**
3. Selecione **Main** branch como fonte
4. Sua página estará disponível em: `https://seu-usuario.github.io/nfse-downloader-site`

## Configuração Necessária

Para que os botões de download funcionem, edite o arquivo `index.html` ou `script.js`:

```javascript
// Em script.js, linha ~13
downloadBtn.href = 'https://github.com/seu-usuario/seu-repo/releases/download/v1.0.0/app.exe';
releaseBtn.href = 'https://github.com/seu-usuario/seu-repo/releases';
```

Ou diretamente em `index.html`, procure pelos elementos:
- `id="downloadBtn"` - Link para baixar o app
- `id="releaseBtn"` - Link para ver todas as versões

## Personalizações

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #003d7a;    /* Azul escuro */
    --accent-color: #ff6b35;       /* Laranja destaque */
    /* ... outras cores */
}
```

### Adicionar Screenshots

Substitua a seção de screenshots em `index.html`:

```html
<img src="seu-screenshot.png" alt="Screenshot do Baixa NFS-e" class="screenshot">
```

### Adicionar Links de Suporte

Atualize os links em `index.html`:
- Documentação
- Reportar Bug
- Contato

## Responsividade

A página é totalmente responsiva e se adapta a:
- 📱 Celulares (até 480px)
- 📱 Tablets (480px a 768px)
- 💻 Desktop (acima de 768px)

## Navegadores Suportados

- Chrome/Chromium (versões recentes)
- Firefox (versões recentes)
- Safari (versões recentes)
- Edge (versões recentes)

## Deploy

A forma mais simples de fazer deploy é:

1. Certifique-se de que o repositório é público
2. Vá em **Settings** → **Pages**
3. Ative GitHub Pages na seção "Deploy from a branch"
4. Selecione o branch (main/master)
5. Aguarde alguns minutos

Sua página estará no ar em poucos minutos!

## Dicas

- Mantenha os arquivos leves para melhor performance
- Teste em diferentes dispositivos e navegadores
- Use formatos de imagem otimizados (WebP, quando possível)
- Acompanhe o Google Analytics para entender seu público

## Suporte

Para mais informações sobre GitHub Pages, acesse:
https://docs.github.com/en/pages

## Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido com ❤️ para o projeto Baixa NFS-e
