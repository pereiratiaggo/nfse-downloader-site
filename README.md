# Baixa NFS-e - Landing Page

Uma página web simples, responsiva e otimizada para SEO para disponibilizar o download do app Baixa NFS-e no GitHub Pages.

## Características

- ✨ Design moderno e responsivo
- 📱 Totalmente compatível com dispositivos móveis
- ⚡ Carregamento rápido (arquivos estáticos)
- 🎨 Tema azul profissional
- 🔍 Otimizado para motores de busca (SEO)
- ♿ Acessível com marcação semântica adequada
-  Fácil de customizar

## Estrutura dos Arquivos

```
.
├── index.html      # Página principal com marcação semântica e SEO
├── style.css       # Estilos CSS responsivos e otimizados
├── script.js       # Funcionalidades JavaScript com foco em acessibilidade
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
```

Ou diretamente em `index.html`, procure pelo elemento:
- `id="downloadBtn"` - Link para baixar o app

## Personalizações

### Alterar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary: #0066cc;      /* Azul principal */
    --dark: #003d7a;         /* Azul escuro */
    /* ... outras cores */
}
```

### Adicionar Screenshots

Substitua a imagem em `index.html`:

```html
<img src="sua-imagem.png" alt="Descrição da imagem do Baixa NFS-e" class="preview-img">
```

### Personalizar Conteúdo

Atualize os seguintes elementos em `index.html`:
- Título e descrição da página
- Texto de apresentação
- Conteúdo SEO e FAQ
- Links sociais e de suporte

## Responsividade

A página é totalmente responsiva e se adapta a:
- 📱 Celulares (mobile-first)
- 📱 Tablets
- 💻 Desktop

## SEO e Acessibilidade

- Marcação semântica adequada (header, main, footer, section, etc.)
- Schema.org para rich snippets
- Meta tags Open Graph e Twitter Cards
- Atributos WAI-ARIA para acessibilidade
- Contraste adequado de cores
- Tamanhos de fonte legíveis

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
- Acompanhe o Google Search Console para entender seu desempenho SEO

## Suporte

Para mais informações sobre GitHub Pages, acesse:
https://docs.github.com/en/pages

## Licença

Este projeto é de código aberto. Sinta-se livre para usar, modificar e distribuir.

---

Desenvolvido com ❤️ para o projeto Baixa NFS-e
