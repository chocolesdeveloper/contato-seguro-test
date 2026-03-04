# Contato Seguro - CRUD de Livros e Autores

Projeto front-end desenvolvido como parte do processo seletivo/desafio técnico da **Contato Seguro**.

Aplicação completa de gerenciamento (CRUD) de **livros** e **autores**, utilizando **persistência local** no navegador e seguindo rigorosamente as especificações solicitadas.

## ✅ Requisitos Atendidos (conforme descrição do desafio)

- React 18 (sem uso do React 19)
- Vite como ferramenta de build/bundler
- TypeScript para tipagem estática
- Ant Design para componentes de UI e formulários
- Zustand para gerenciamento de estado global
- IndexedDB para persistência de dados (wrapper: **localForage**)
- Day.js para manipulação de datas
- Docker configurado e funcional
- Arquitetura limpa e organizada (components, pages, services, store, types, layouts)
- JSDoc em partes relevantes do código
- **Sem** meta-frameworks (Next.js, Remix, TanStack Start etc.)
- **Sem** Tailwind CSS ou SASS
- **Sem** TurboRepo (não foi exigido no escopo entregue)

## ✨ Funcionalidades Implementadas

### Livros

- Criar novo livro (modal com formulário Ant Design)
- Listar todos os livros (tabela com paginação e busca básica)
- Visualizar detalhes de um livro (modal de visualização)
- Excluir livro (com modal de confirmação)

### Autores

- Criar novo autor (modal com formulário)
- Listar todos os autores (tabela)
- Visualizar detalhes de um autor (modal)
- Excluir autor (com confirmação)

**Observação**: Não há relação obrigatória livro-autor implementada (pode ser expandida futuramente).

## 🛠️ Tecnologias Utilizadas

O projeto segue rigorosamente as exigências do desafio, com algumas adições que melhoram a qualidade, testabilidade e experiência de desenvolvimento.

### Dependências Principais (Production)

| Tecnologia            | Finalidade                            | Versão aproximada | Nota / Destaque                        |
| --------------------- | ------------------------------------- | ----------------- | -------------------------------------- |
| React                 | Biblioteca principal de UI            | 18.3.1            | React 18 (sem uso do 19)               |
| TypeScript            | Tipagem estática em todo o projeto    | 5.3.3             | Tipagem forte e interfaces dedicadas   |
| Vite                  | Bundler e servidor de desenvolvimento | 5.3.1             | Build extremamente rápido              |
| Ant Design            | Componentes UI e formulários          | 5.12.0            | Design system completo e consistente   |
| Zustand               | Gerenciamento de estado global        | 4.4.6             | Leve, simples e sem boilerplate        |
| localForage           | Abstração para IndexedDB              | 1.10.0            | Persistência local no navegador        |
| Day.js                | Manipulação e formatação de datas     | 1.11.10           | Alternativa leve ao Moment.js          |
| @tanstack/react-query | Gerenciamento de cache e queries      | 5.90.21           | Cache inteligente e refetch automático |
| nanoid                | Geração de IDs únicos                 | 5.1.6             | IDs curtos e seguros para entidades    |

### Ferramentas de Desenvolvimento e Qualidade (DevDependencies)

| Ferramenta               | Finalidade                                    | Versão aproximada | Nota / Uso no projeto                |
| ------------------------ | --------------------------------------------- | ----------------- | ------------------------------------ |
| Vitest                   | Testes unitários e de componentes             | 2.0.18            | Runner de testes ultrarrápido        |
| @vitest/coverage-v8      | Cobertura de código                           | 2.0.18            | Relatórios de cobertura integrados   |
| @vitest/ui               | Interface web para Vitest                     | 2.0.18            | Visualização interativa dos testes   |
| Storybook                | Desenvolvimento e documentação de componentes | 8.2.14            | + React-Vite + vários addons         |
| @storybook/react-vite    | Integração Storybook + Vite                   | 8.2.14            | Build otimizado para o projeto       |
| @chromatic-com/storybook | Testes visuais automatizados                  | 5.0.1             | Regressão visual (Chromatic)         |
| @storybook/addon-a11y    | Testes de acessibilidade                      | 8.2.14            | Conformidade WCAG                    |
| @storybook/addon-docs    | Documentação automática de componentes        | 8.2.14            | MDX + Autodocs                       |
| happy-dom                | Ambiente DOM para testes sem browser          | 20.8.3            | Usado no Vitest por padrão           |
| JSDoc                    | Documentação inline no código                 | —                 | Comentários em funções e componentes |
| Docker                   | Containerização da aplicação                  | —                 | Dockerfile + .dockerignore inclusos  |

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js **18+** (recomendado 20.x)
- Gerenciador de pacotes: **npm** ou **yarn**

### 1. Clonagem e Instalação

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd contato-seguro-frontend   # ou o nome da pasta que você usa

# Instalar dependências
npm install
# ou
yarn install
```

```bash
# Rodar projeto
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em:→ http://localhost:5173

```bash
# Build do projeto
npm run build
# ou
yarn build
```

A pasta dist/ será gerada com os arquivos otimizados.

```bash
# Preview
npm run preview
# ou
yarn preview
```

Acesse: http://localhost:4173 (porta padrão do Vite preview)

```bash
# 1. Construir a imagem
docker build -t contato-seguro:latest .

# 2. Executar o container
docker run -d -p 3000:3000 --name contato-seguro contato-seguro:latest
```

### Estrutura de Pastas (resumida)

src/
├── components/ ← Modais e tabelas reutilizáveis
├── helpers/ ← Funções de ajuda
├── hooks/ ← Hooks personlizados
├── layout/ ← Layout padrão para o projeto
├── pages/ ← Páginas principais (HomePage)
├── services/ ← Lógica de persistência (storage.ts)
├── store/ ← Stores Zustand
├── stories/ ← Arquivos para storybook
├── test/ ← Arquivos do vitest
├── types/ ← Interfaces e tipos TypeScript
├── App.tsx
├── main.tsx
└── index.css

### 📝 Notas Finais

Os dados persistem mesmo após fechar o navegador (graças ao IndexedDB).
Para limpar todos os dados → abra o DevTools → Application → IndexedDB → delete o database do localForage.
Projeto segue boas práticas de organização e tipagem forte.

### 👤 Autor

Desenvolvido por William como entrega do desafio front-end Contato Seguro (2025/2026).
📄 Licença: MIT
