<template>
  <nav class="bg-white/80 backdrop-blur-md shadow-lg py-2 rounded-full border border-gray-200 mx-auto max-w-3xl mt-4 sticky top-0 z-50 transition-shadow duration-300">
    <div class="flex justify-center items-center space-x-8">
      <NuxtLink to="/home" class="text-gray-700 hover:text-blue-600">Accueil</NuxtLink>
      <NuxtLink to="/parcours" class="text-gray-700 hover:text-blue-600">Parcours</NuxtLink>
      <NuxtLink to="/prestations" class="text-gray-700 hover:text-blue-600">Prestations</NuxtLink>
      <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
nav {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>