# Desafio de Projeto: 🛒 Carrinho de Compras da Shopee

## 💻 Descrição
Este projeto simula a lógica de um carrinho de compras, permitindo adicionar, remover e excluir itens, além de calcular o total e subtotais.

## 🚀 Funcionalidades
- **Adicionar Item**: Inclui um item ao carrinho.
- **Calcular Total**: Exibe o total do carrinho.
- **Excluir Item**: Remove um item do carrinho.
- **Remover Item**: Diminui a quantidade ou remove o item se a quantidade for 1.
- **Listar Itens**: Mostra todos os itens no carrinho.

## 📂 Estrutura do Projeto
/services ├── cart.js # Manipulação do carrinho └── item.js # Criação de itens index.js # Arquivo principal readme.md # Documentação

bash
Copiar código

## 🔧 Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/giovanesouza/desafio-shopee-cart-nodejs
   cd desafio-shopee-cart-nodejs
Execute o projeto:
bash
Copiar código
node ./src/index.js
📝 Como Usar
Criar um Item
js
Copiar código
import createItem from './services/item.js';
const item = await createItem('Nome do Item', 99.99, 2);
Adicionar um Item ao Carrinho
js
Copiar código
import { addItem } from './services/cart.js';
await addItem(myCart, item);
Calcular o Total do Carrinho
js
Copiar código
import { calculateTotal } from './services/cart.js';
await calculateTotal(myCart);
Excluir um Item do Carrinho
js
Copiar código
import { deleteItem } from './services/cart.js';
await deleteItem(myCart, 'Nome do Item');
Remover um Item
js
Copiar código
import { removeItem } from './services/cart.js';
await removeItem(myCart, item);
Listar Itens no Carrinho
js
Copiar código
import { displayCart } from './services/cart.js';
await displayCart(myCart);
📋 Exemplo de Uso
js
Copiar código
import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];
console.log('Bem-vindo ao seu Carrinho Shopee!');

// Criação de itens
const item1 = await createItem('Kit 5 Camisas Masculina', 88.99, 1);
const item2 = await createItem('Kit 3 Bermudas Sarja Masculina', 122.98, 2);
const item3 = await createItem('Smartphone Xiaomi Redmi Note 12 Pro 5G', 1799.99, 1);

// Adição de itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// Remover e excluir itens
await cartService.removeItem(myCart, item2);
await cartService.deleteItem(myCart, item3.name);

// Listar e calcular total
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);