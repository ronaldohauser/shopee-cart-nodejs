// Adiciona item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// Calcula o total do carrinho
async function calculateTotal(userCart) {
  const total = userCart.reduce((sum, item) => sum + item.subtotal(), 0);
  console.log("\nCarrinho Shopee:");
  console.log(`💵 Total: R$ ${total.toFixed(2)}`);
}

// Exclui item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);
  if (index !== -1) {
      userCart.splice(index, 1);
  }
}

// Remove um item ou diminui a quantidade
async function removeItem(userCart, item) {
  const index = userCart.findIndex(p => p.name === item.name);

  if (index === -1) {
      console.log("Item não encontrado");
      return;
  }

  if (userCart[index].quantity > 1) {
      userCart[index].quantity -= 1;
  } else {
      userCart.splice(index, 1);
  }
}

// Lista todos os itens do carrinho
async function displayCart(userCart) {
  console.log("\nLista de itens:");
  userCart.forEach((item, index) => {
      console.log(
          `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal = R$ ${item.subtotal().toFixed(2)}`
      );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
