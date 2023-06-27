<template>
  <div>
    <Head>
      <title>Nuxt Dojo | {{ product.title }}</title>
      <meta name="description" content="product.description" />
    </Head>

    <productDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

//fetch the data
const {data: product} = await useFetch(uri);

if(!product.value) {
   throw createError({
       statusCode: 404,
       message: 'Product not found'
   })
}


definePageMeta({
    layout: 'products'
})
</script>

<style scoped></style>
