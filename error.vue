<template>
    <div class="flex flex-col justify-center h-screen items-center">
        <p class="font-bold text-7xl">{{ error.statusCode }}</p>
        <p class="text-6xl">Ooops.</p>
        <p>{{ error.message }}</p>
        <button class="btn mt-4" @click="handleClearError">Go Home</button>

    </div>
</template>

<script setup>
 defineProps(['error'])

 const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>