<template>
  <div>
    <h1 class="text-xl text-red-500 mb-4">About</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eveniet
      sunt consectetur omnis qui amet quisquam eligendi alias aliquid unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia eveniet
      sunt consectetur omnis qui amet quisquam eligendi alias aliquid unde.
    </p>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
//  const { data } = await useFetch('/api/api?name=usman', {
//     method: 'post',
//     body: {
//       age: 21
//   }
//  })

const { data } = await useFetch('/api/currency/GBP')
</script>
 
<style scoped>

</style>
