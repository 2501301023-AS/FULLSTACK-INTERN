export const initialState = {
  cart: [],
  total: 0,
  discount: 0,
};

export function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }

      const subtotal = updatedCart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

      const total =
        subtotal - (subtotal * state.discount) / 100;

      return {
        ...state,
        cart: updatedCart,
        total,
      };
    }

    case "INCREMENT": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const subtotal = updatedCart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

      const total =
        subtotal - (subtotal * state.discount) / 100;

      return {
        ...state,
        cart: updatedCart,
        total,
      };
    }

    case "DECREMENT": {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      const subtotal = updatedCart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

      const total =
        subtotal - (subtotal * state.discount) / 100;

      return {
        ...state,
        cart: updatedCart,
        total,
      };
    }

    case "APPLY_DISCOUNT": {
      const subtotal = state.cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
      );

      const total =
        subtotal - (subtotal * action.payload) / 100;

      return {
        ...state,
        discount: action.payload,
        total,
      };
    }

    case "CLEAR_CART":
      return {
        cart: [],
        total: 0,
        discount: 0,
      };

    default:
      return state;
  }
}