# EcoTrend — Check-Point 04

# Equipe / Turma

- Artur Rodrigues
- Gabriel Novais
- Marcielle Janguas Pina Carvalho
- Marcos Vinicius

1ESPK - Diurno - Paulista

# 3. Requisições Assíncronas com Fetch:
E-commerce de produtos sustentáveis, com foco em **funcionalidades interativas** usando **React + JavaScript**:
- Carregamento de produtos via **fake API** (JSON Server) e `fetch` (`async/await`)
- **Spinner** de carregamento e **tratamento de erro**
- **Filtros** por categoria e **ordenação** por preço

## Stack
- React (Vite)
- JSON Server (fake API)
- Node 18+

## Pré-requisitos
- Node 18+ (`node -v`)
- npm

## Como rodar
1. Instalar deps:
   ```bash
   npm install

2. Criar .env na raiz:
    VITE_API_URL=http://localhost:5174

3. Subir a fake API (terminal 1):
    npm run api
    Endpoints: http://localhost:5174/products

4. Subir o app (terminal 2):
    npm run dev
    App: http://localhost:5173/

# Scripts

npm run dev — Vite em dev
npm run api — JSON Server em 5174
npm run build — build de produção
npm run preview — pré-visualização do build

# Endpoints (JSON Server)
GET /products

Filtros:
    GET /products?category=roupas
    GET /products?_sort=price&_order=asc
    Combinados: GET /products?category=casa&_sort=price&_order=desc