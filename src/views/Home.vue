<template>
  <div>Products</div>
  <div>
    <div>{{ product.name }}</div>
    <img :src="product.image" alt="" class="w-full rounded-lg" />
    <div>
      <div>{{ product.name }}</div>
      <div>{{ product.price }}</div>
      <div>{{ product.image }}</div>
    </div>
    <button
      @click="addtoCart"
      class="w-full rounded bg-teal-500 px-3 py-2 text-white"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    const cartStore = useCart();
    return { cartStore };
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Shoes",
          price: 10,
          image: `https://picsum.photos/200/300`,
        },
        {
          id: 2,
          name: "Jeans",
          price: 20,
          image: `https://picsum.photos/200/300`,
        },
        {
          id: 3,
          name: "T-shirt",
          price: 30,
          image: `https://picsum.photos/200/300`,
        },
      ],
    };
  },
  methods: {
    addtoCart(product) {
      this.cartStore.cartProducts.push(product);
    },
  },
};
</script>
