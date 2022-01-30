const initailValue = {
  data: [],
  cartNumber: 0,
  total: 0,
};
const cartReducer = (state = initailValue, action) => {
  switch (action.type) {
    case "ADD_CART":
      const newList = [...state.data];
      if (state.cartNumber === 0) {
        newList.push(action.payload);
        state.cartNumber = action.payload.quantity;
        state.total = action.payload.quantity * action.payload.price;
      } else {
        let check = false;
        newList.map((item) => {
          if (
            item.id === action.payload.id &&
            item.size === action.payload.size
          ) {
            item.quantity += action.payload.quantity;
            check = true;
          }
        });
        if (!check) {
          newList.push(action.payload);
        }
        state.cartNumber = newList
          .map((item) => item.quantity)
          .reduce((total, currentValue) => total + currentValue);
        state.total = newList
          .map((item) => item.quantity * item.price)
          .reduce((total, currentValue) => total + currentValue);
      }
      console.log(newList);
      console.log(state);

      return {
        ...state,
        data: newList,
      };
    case "REMOVE_CART":
      const products = [...state.data];
      const new_arr = products.filter((item) => item !== action.payload);
      if (new_arr.length !== 0) {
        state.cartNumber = new_arr
          .map((item) => item.quantity)
          .reduce((total, currentValue) => total + currentValue);
        state.total = new_arr
          .map((item) => item.quantity * item.price)
          .reduce((total, currentValue) => total + currentValue);
      } else {
        state.cartNumber = 0;
        state.total = 0;
      }
      return {
        ...state,
        data: new_arr,
      };
    case "SUCCESS":
      return {
        data: [],
        cartNumber: 0,
        total: 0,
      };
    default:
      return state;
  }
};
export default cartReducer;
