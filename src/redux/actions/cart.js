export function addCart(product) {
  return {
    type: "ADD_CART",
    payload: product,
  };
}
export function removePro(product) {
  return {
    type: "REMOVE_CART",
    payload: product,
  };
}
export function successOrder() {
  return {
    type: "SUCCESS",
  };
}
