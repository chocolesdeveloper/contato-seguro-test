# Contato Seguro - CRUD de Livros e Autores

Um projeto front-end desenvolvido com React 18, Vite, TypeScript e Ant Design para gerenciar um CRUD de livros e autores.

## 📋 Características

- ✅ **CRUD completo** de livros e autores
- ✅ **IndexedDB** para persistência de dados (via localForage)
- ✅ **Ant Design** para UI e formulários
- ✅ **Zustand** para gerenciamento de estado
- ✅ **TypeScript** para tipagem
- ✅ **Vite** como bundler
- ✅ **Docker** habilitado
- ✅ **Dayjs** para manipulação de datas

## 🚀 Instalação e Setup

### Pré-requisitos

- Node.js 18+ ou superior
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

## 🏃 Executando o Projeto

### Modo desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## 🐳 Docker

### Build da imagem

```bash
docker build -t contato-seguro:latest .
```

### Executar container

```bash
docker run -p 3000:3000 contato-seguro:latest
```

Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── CreateBookModal.tsx
│   ├── CreateAuthorModal.tsx
│   ├── BooksTable.tsx
│   ├── AuthorsTable.tsx
│   ├── ViewBookModal.tsx
│   └── ViewAuthorModal.tsx
├── pages/              # Páginas da aplicação
│   └── HomePage.tsx
├── services/           # Serviços (IndexedDB, API, etc)
│   └── storage.ts
├── store/              # Estado global (Zustand)
│   └── index.ts
├── types/              # Tipos TypeScript
│   └── index.ts
├── layouts/            # Layouts da aplicação
│   └── MainLayout.tsx
├── App.tsx             # Componente raiz
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades

### Livros

- ✅ Criar novo livro (modal)
- ✅ Visualizar todos os livros (tabela)
- ✅ Visualizar detalhes de um livro (modal)
- ✅ Deletar livro com confirmação (alerta)

### Autores

- ✅ Criar novo autor (modal)
- ✅ Visualizar todos os autores (tabela)
- ✅ Visualizar detalhes de um autor (modal)
- ✅ Deletar autor com confirmação (alerta)

## 📝 Regras Seguidas

- ❌ Sem meta frameworks (Next.js, Remix, TanStack Start)
- ❌ Sem Tailwind ou SASS
- ✅ Ant Design para UI e formulários
- ✅ Dayjs para datas
- ✅ Vite como bundler
- ✅ Docker
- ✅ React 18 (com preferência sobre React 19)
- ✅ IndexedDB via localForage

## 🎨 Diferenciais Implementados

- ✅ **Zustand** - Gerenciamento de estado
- ✅ **TypeScript** - Tipagem estática
- ✅ **JSDoc** - Documentação do código
- ✅ **Arquitetura bem definida** - services, types, components, pages

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Linguagem
- **Vite** - Bundler/Build tool
- **Ant Design** - UI library
- **Zustand** - State management
- **localForage** - IndexedDB wrapper
- **Dayjs** - Date library
- **Docker** - Containerização

## 📄 Licença

MIT

## 👤 Autor

Desenvolvido como desafio de front-end.
