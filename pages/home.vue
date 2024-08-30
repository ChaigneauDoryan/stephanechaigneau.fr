<template>
  <div>
    <!-- Section Hero -->
    <section class="hero-section bg-cover bg-center py-32 text-white" style="background-image: url('/images/hero-bg.jpg');">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-5xl text-gray-800 font-bold mb-4">Consultant en Stratégie Commerciale</h1>
        <p class="text-xl text-gray-800 mb-8">Boostez votre croissance avec des stratégies sur-mesure adaptées à votre entreprise.</p>
        <NuxtLink to="/contact" class="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100">Contactez-moi dès aujourd'hui</NuxtLink>
      </div>
    </section>

    <!-- Section de Présentation -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-gray-800">Pourquoi choisir mes services ?</h2>
        <p class="text-lg text-gray-600 mb-12">Avec plus de 10 ans d'expérience dans le conseil stratégique, j'accompagne les entreprises dans leur développement commercial, leur stratégie de croissance et l'optimisation de leurs processus de vente.</p>
      </div>
    </section>

    <!-- Section des Services Principaux -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        <!-- Service 1 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-chart-line text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Analyse de Marché</h3>
          <p class="text-gray-700 mb-6">Identifiez de nouvelles opportunités de croissance grâce à une analyse approfondie de votre marché.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Service 2 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-bullseye text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Stratégie Commerciale</h3>
          <p class="text-gray-700 mb-6">Renforcez votre position sur le marché avec des stratégies commerciales adaptées à vos objectifs.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Service 3 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-users text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Formation des Équipes</h3>
          <p class="text-gray-700 mb-6">Maximisez la performance de vos équipes de vente avec des formations personnalisées.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section Témoignages Clients -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6 text-gray-800">Ce que disent mes clients</h2>
        <div class="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          <!-- Témoignage 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <p class="text-gray-700 mb-4">"Une expertise exceptionnelle qui a transformé notre approche commerciale!"</p>
            <p class="font-semibold">- Entreprise X</p>
          </div>
          <!-- Témoignage 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <p class="text-gray-700 mb-4">"Des stratégies sur-mesure qui ont réellement fait la différence."</p>
            <p class="font-semibold">- Entreprise Y</p>
          </div>
          <!-- Témoignage 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md max-w-xs">
            <p class="text-gray-700 mb-4">"Une formation d'équipe efficace, nos résultats ont considérablement augmenté!"</p>
            <p class="font-semibold">- Entreprise Z</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Appel à l'Action -->
    <section class="py-16 bg-green-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">Prêt à transformer votre entreprise ?</h2>
        <p class="text-lg mb-8">Contactez-moi pour discuter de la façon dont je peux vous aider à atteindre vos objectifs commerciaux.</p>
        <NuxtLink to="/contact" class="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100">Discutons Ensemble</NuxtLink>
      </div><br><br>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>