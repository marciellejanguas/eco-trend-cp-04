# EcoTrend — Check-Point 04

# Equipe / Turma

- Artur Rodrigues Trindade Paes – RM 564309 
- Gabriel Silva Novais – RM 566370 
- Marcielle Janguas Pina Carvalho – RM 561505
- Marcos Vinicius Aquino Prado – RM 562775


1ESPK - Diurno - Paulista

# 2. Storage & JSON
- Integração do carrinho com **localStorage** para manter os itens salvos entre sessões
- Implementado com `useEffect` para salvar e restaurar o estado do carrinho

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
```
npm install
```

2. Criar .env na raiz:
```
VITE_API_URL=http://localhost:5174
```

3. Subir a fake API (terminal 1):
```
npm run api
Endpoints: http://localhost:5174/products
```

4. Subir o app (terminal 2):
```
npm run dev
App: http://localhost:5173/
```

# Endpoints (JSON Server)
- GET /products
- Filtros:
```
GET /products?category=roupas
GET /products?_sort=price&_order=asc
Combinados: GET /products?category=casa&_sort=price&_order=desc
```

# Scripts
```
npm run dev — Vite em dev
npm run api — JSON Server em 5174
npm run build — build de produção
npm run preview — pré-visualização do build
```
