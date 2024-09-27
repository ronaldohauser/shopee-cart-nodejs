import * as cartService from "./services/cart.js"; // Importa todas as funções do cart
import createItem from "./services/item.js";

const myCart = [];

const init = async () => {
    console.log("Bem-vindo ao seu Carrinho Shopee!");

    // Cria e adiciona itens ao carrinho
    const items = [
        await createItem("Kit 5 Camisas Masculina", 88.99, 1),
        await createItem("Kit 3 Bermudas Sarja Masculina", 122.98, 2),
        await createItem("Smartphone Xiaomi Redmi Note 12 Pro 5G", 1799.99, 1),
    ];

    for (const item of items) {
        await cartService.addItem(myCart, item);
    }

    // Remove o item 2 (Kit 3 Bermudas Sarja Masculina)
    await cartService.removeItem(myCart, items[1]);
    await cartService.removeItem(myCart, items[1]); // Remoção repetida, pode ser opcional

    // Exclui o item 3 (Smartphone)
    await cartService.deleteItem(myCart, items[2].name);

    // Exibe itens do carrinho e calcula total
    await cartService.displayCart(myCart);
    await cartService.calculateTotal(myCart);
};

// Inicializa o carrinho
init().catch(console.error);
