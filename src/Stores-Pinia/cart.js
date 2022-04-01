import { defineStore } from "pinia";
export const useCart = defineStore("cart", {
  state: () => ({
    cartProducts: [],
  }),
  getters: {},
  actions: {
    addtoCart() {},
  },
});
