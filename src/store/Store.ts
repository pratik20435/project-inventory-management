import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

function mainFunctionForUseStore(set) {
  return {
    count: 0,
    cart: [],

    addToCart: function (product) {
      set(function (state: any) {
        const productIndex = state.cart.findIndex((cartItem: any) => {
          return cartItem.product._id === product._id;
        });

        console.log(productIndex, "@productIndex");

        if (productIndex < 0) {
          return {
            ...state,
            cart: [...state.cart, { product, qty: 1 }],
          };
        } else {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.product._id === product._id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };
        }

        // check if product already exists
        // if no then push to array
        // if yes find product and increase it's quantity

        // return {
        //   ...state,
        //   // cart: [...state.cart, product],
        // };
      });
    },
    // increaseQty: () => {},
    // decrementQty: () => {},
    incrementCartQty: (productId) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.product._id === productId ? { ...item, qty: item.qty + 1 } : item
        ),
      })),
    decrementCartQty: (productId) =>
      set((state) => ({
        cart: state.cart.map((item) =>
          item.product._id === productId && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      })),

    removeFromCart: function (productId) {
      set((state) => ({
        ...state,
        cart: state.cart.filter((item) => item.product._id !== productId),
      }));
    },
    incrementCount: function () {
      set(function (state: any) {
        return {
          count: state.count + 1,
        };
      });
    },
    test: "test",
    setTest: null,
  };
}

const useStore = create(
  persist(mainFunctionForUseStore, {
    name: "user-cart",
    storage: createJSONStorage(() => localStorage), // Storage medium
  })
);

export default useStore;

/**
 * (set) => {
  return {
    test: "test",
    count: 0,
    incrementCount: () => {
      set(function (state) {
        return {
          count: state.count + 1,
        };
      });
    },
  };
}
 * 
 * 
 * 
 */
