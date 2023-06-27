<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div v-for="product in products">
        <productCard :product = 'product' />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead(
  {
    title: "Products",
    meta: [
      {
        name: "description",
        content: "This is the products page",
      },
    ]
  }
)
</script>

<style scoped></style>
