# 🌿 ONG Esperança Viva — Website Institucional & Voluntariado

<div align="center">

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Acessibilidade](https://img.shields.io/badge/WCAG%20AA-Acessível-16a34a?style=for-the-badge)
  ![Responsivo](https://img.shields.io/badge/Design-100%25%20Responsivo-0284c7?style=for-the-badge)

  <p align="center">
    <strong>Plataforma web moderna e acolhedora desenvolvida para divulgar ações sociais, captar doações e cadastrar novos voluntários.</strong>
  </p>

  <p align="center">
    <a href="#-sobre-o-projeto">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias-utilizadas">Tecnologias</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-como-rodar-o-projeto">Como Rodar</a> •
    <a href="#-requisitos">Requisitos</a> •
    <a href="#-autor">Autor</a>
  </p>

</div>

---

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido com **fins acadêmicos para a faculdade**, tendo como objetivo aplicar na prática conceitos fundamentais e avançados de desenvolvimento Front-End:

- **Semântica Web Rigorosa**: Utilização correta das tags estruturais do HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<picture>`, `<fieldset>`).
- **Design System & CSS Moderno**: Arquitetura com variáveis CSS (*Design Tokens*), Flexbox, CSS Grid e tipografia fluida.
- **Acessibilidade e Usabilidade (UX/UI)**: Alto contraste de cores (WCAG AA), estados de foco visíveis (`:focus-visible`), navegação por teclado e design centrado no usuário.
- **Integração com APIs Externas**: Consumo da API pública do **ViaCEP** em JavaScript puro para preenchimento inteligente de endereço.
- **Identidade Visual Conectada**: Harmonia visual baseada nas cores oficiais da organização (**Verde Esperança** `#16a34a` e **Azul Confiança** `#0284c7`).

---

## ✨ Funcionalidades

### 🏠 Página Inicial (`index.html`)
- **Hero Section Atraente**: Destaque para a fotografia real das ações com badge de transparência.
- **Painel de Métricas de Impacto**: Contadores de famílias atendidas (+1.500), crianças participantes (+300) e voluntários ativos (+150).
- **Quem Somos & Missão**: Cards ilustrados destacando os pilares de Inclusão Social, Ação Comunitária e Apoio Contínuo.
- **Chamada para Ação (CTA)**: Acesso direto para doações e voluntariado.

### 🎨 Página de Projetos & Doações (`projetos.html`)
- **Projetos em Destaque**: Apresentação visual do *Projeto Criança Futura* (oficinas e reforço escolar) e da *Campanha do Agasalho e Mantimentos*.
- **Módulo PIX Interativo**: Caixa estilizada com simulação de QR Code e botão de **1 clique para copiar a chave PIX**, com feedback visual e notificação *toast*.
- **Tabela Bancária Responsiva**: Instruções completas para transferências tradicionais (TED/DOC).

### 📝 Página de Cadastro de Voluntários (`cadastro.html`)
- **Formulário em Etapas Visuais**: Divisão lógica entre *Dados Pessoais*, *Endereço* e *Perfil de Atuação*.
- **Busca Automática de CEP**: Ao digitar os 8 dígitos do CEP, a rua, cidade e estado são preenchidos automaticamente via API ViaCEP, direcionando o cursor direto para o número.
- **Máscaras de Input em Tempo Real**: Formatação instantânea para CPF (`000.000.000-00`), Telefone/WhatsApp (`(00) 00000-0000`) e CEP (`00000-000`).
- **Seletores Personalizados**: Checkboxes e botões de opção estilizados para áreas de interesse e disponibilidade de horários.
- **Feedback de Envio**: Validação nativa com confirmação animada.

### 📱 Menu Mobile & Interações Globais
- Menu hambúrguer adaptado para smartphones e tablets.
- Indicador automático de página ativa na barra de navegação.
- Cabeçalho fixo com efeito de desfoque translúcido (*glassmorphism*).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web puras (*Vanilla Web*), priorizando alto desempenho, leveza e ausência de dependências complexas:

- **HTML5 Semântico**: Estrutura acessível e otimizada para motores de busca (SEO).
- **CSS3 Moderno**: 
  - CSS Custom Properties (Variáveis de tema);
  - Flexbox e CSS Grid para layouts bidimensionais;
  - Media Queries para responsividade total (Mobile-First / Desktop);
  - Animações e microinterações com transições cúbicas suaves.
- **JavaScript (ES6+)**:
  - Manipulação de DOM sem frameworks;
  - Fetch API assíncrona (`async/await`) para consumo do ViaCEP;
  - Clipboard API para cópia ágil de dados;
  - Sistema personalizado de notificações *Toast*.
- **Tipografia & Ícones**:
  - Fonte [*Plus Jakarta Sans*](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts;
  - Ícones vetoriais SVG leves e nítidos em qualquer resolução.

---

## 📁 Estrutura do Projeto

```plaintext
projeto_ong/
├── index.html               # Página inicial (Quem Somos, Métricas e Missão)
├── projetos.html            # Página de projetos sociais e doações (PIX/Banco)
├── cadastro.html            # Formulário de cadastro de voluntários
├── README.md                # Documentação completa do projeto
└── assets/
    ├── css/
    │   └── style.css        # Folha de estilos completa e responsiva
    ├── js/
    │   └── main.js          # Scripts, máscaras, API ViaCEP e menu mobile
    └── img/
        ├── logo-ong.svg          # Logotipo oficial em vetor
        ├── voluntarios.webp      # Fotografia de voluntários (formato otimizado)
        ├── voluntarios.jpg       # Fotografia de voluntários (fallback)
        ├── projetos-banner.webp  # Banner das oficinas infantis (otimizado)
        └── projetos-banner.jpg   # Banner das oficinas infantis (fallback)
```

---

## 🚀 Como Rodar o Projeto

Como o projeto é desenvolvido com tecnologias estáticas puras, não é necessário compilar ou instalar dependências de pacotes (como `npm install`).

### Opção 1: Abrir Diretamente no Navegador (Mais Rápido)
1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/RaulSalles/ong-esperanca-viva.git
   ```
2. Navegue até a pasta do projeto.
3. Dê um duplo clique no arquivo **`index.html`** para abrir no seu navegador padrão.

---

### Opção 2: Com a extensão Live Server (VS Code) — *Recomendado*
1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server** (caso ainda não tenha).
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
4. O projeto será iniciado em `http://127.0.0.1:5500`.

---

### Opção 3: Usando um Servidor Local com Python
Se você possui o Python instalado:

```bash
# Na raiz da pasta do projeto:
python -m http.server 3000
```
Depois, basta acessar no navegador: `http://localhost:3000`

---

## 📋 Requisitos

- **Navegador Web Atualizado**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari ou Opera.
- **Conexão com a Internet**: Necessária para carregar a fonte do Google Fonts e para realizar as consultas de CEP na API pública do ViaCEP.
- **Editor de Código (Opcional)**: VS Code, Sublime Text ou qualquer editor de sua preferência para visualizar ou editar os códigos.

---

## 🎯 Critérios Acadêmicos Atendidos

| Critério | Implementação no Projeto |
| :--- | :--- |
| **HTML Semântico** | Páginas com tags estruturais adequadas (`header`, `main`, `section`, `article`, `fieldset`, `figure`). |
| **CSS Organizado** | Folha modular com variáveis, reset moderno e nomenclatura clara. |
| **Responsividade** | Layout adaptável para telas a partir de 320px até telas widescreen 4K. |
| **Formulários Web** | Validações com Regex, tipos adequados (`email`, `tel`, `date`), atributos `required` e `pattern`. |
| **Interatividade JS** | Máscaras de entrada, menu mobile, cópia com 1 clique e consumo de API REST. |
| **Acessibilidade** | Relação de contraste WCAG AA, tags `alt` descritivas nas imagens e foco por teclado. |

---

## 👨‍💻 Autor

Desenvolvido por **Raul Abreu** como projeto acadêmico para o curso de graduação / faculdade.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RaulSalles)

---

<div align="center">
  <sub>ONG Esperança Viva • Juntos por um futuro melhor ❤️</sub>
</div>
