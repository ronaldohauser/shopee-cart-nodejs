// Cria item com subtotal
const createItem = (name, price, quantity) => ({
  name,
  price,
  quantity,
  subtotal: () => price * quantity,
});

export default createItem;
