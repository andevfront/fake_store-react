export const saveToLocalStorage = (state) => {
  if (state.length === 0) {
    localStorage.removeItem("cart");
  } else {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};
