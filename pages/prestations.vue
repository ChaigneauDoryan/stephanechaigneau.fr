<template>
  <div>
    <!-- Section d'introduction avec un fond plus clair et une marge supérieure -->
    <section class="py-16 bg-white mt-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Mes Prestations</h2>
        <p class="text-lg text-gray-600 mb-8">En tant que consultant en stratégie commerciale, j'aide les entreprises à maximiser leur potentiel de croissance, optimiser leurs processus de vente, et former des équipes performantes.</p>
      </div>
    </section>

    <!-- Section des Prestations avec une grille moderne -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        <!-- Carte de Prestation 1 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Analyse de Marché</h3>
          <p class="text-gray-700 mb-6">Évaluer la dynamique de votre marché et identifier de nouvelles opportunités de croissance grâce à des analyses de données approfondies.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Carte de Prestation 2 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Stratégie Commerciale</h3>
          <p class="text-gray-700 mb-6">Développer des stratégies personnalisées pour renforcer votre position sur le marché et améliorer vos résultats commerciaux.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Carte de Prestation 3 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Optimisation des Processus de Vente</h3>
          <p class="text-gray-700 mb-6">Identifier et éliminer les inefficacités dans vos processus de vente pour améliorer votre taux de conversion et augmenter vos revenus.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Carte de Prestation 4 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Formation des Équipes de Vente</h3>
          <p class="text-gray-700 mb-6">Former vos équipes de vente pour maximiser leur performance grâce à des techniques de vente avancées et une connaissance approfondie du marché.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Carte de Prestation 5 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Développement de Partenariats Stratégiques</h3>
          <p class="text-gray-700 mb-6">Identifier et nouer des partenariats stratégiques pour étendre votre portée et pénétrer de nouveaux segments de marché.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Carte de Prestation 6 -->
        <div class="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Audit et Conseil en Performance Commerciale</h3>
          <p class="text-gray-700 mb-6">Analyser vos performances commerciales actuelles et fournir des recommandations claires pour les améliorer.</p>
          <NuxtLink to="/contact" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

      </div>
    </section>
    
    <!-- Section d'appel à l'action avec une couleur d'arrière-plan distincte -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Prêt à faire passer votre entreprise au niveau supérieur ?</h2>
        <NuxtLink to="/contact" class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Contactez-moi dès aujourd'hui</NuxtLink>
      </div><br><br>
    </section>
  </div>
</template>

<script>
export default {
  name: "Prestations"
}
</script>

<style scoped>
.hero-section {
  background-color: #f3f4f6;
}
</style>