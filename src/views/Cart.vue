<template></template>

<script>
import { useCart } from "@/Stores-Pinia/cart";
export default {
  setup() {
    const cartStore = useCart();
    return { cartStore };
  },
  computed: {
    setup() {
      const cartStore = useCart();
      return { cartStore };
    },
  },
};
</script>

<style></style>
