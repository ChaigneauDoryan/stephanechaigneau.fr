<template>
  <div>
    <!-- Section Hero -->
    <section class="hero-section bg-cover bg-center py-12 text-white" style="background-image: url('/images/hero-bg.jpg');">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-5xl text-gray-800 font-bold mb-2">Business Developer</h1>
        <p class="text-xl text-gray-800 mb-2">Boostez votre croissance avec des stratégies sur-mesure adaptées à votre entreprise.</p><br>
        <NuxtLink to="/contact" class="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100">Contactez-moi dès aujourd'hui</NuxtLink>
      </div>
    </section>

    <!-- Section de Présentation -->
    <section class="py-8 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Pourquoi choisir mes services ?</h2>
        <p class="text-lg text-gray-600 mb-6">Avec plus de 10 ans d'expérience dans le conseil stratégique, j'accompagne les entreprises dans leur développement commercial, leur stratégie de croissance et l'optimisation de leurs processus de vente.</p>
      </div>
    </section>

    <!-- Section des Services Principaux -->
    <section class="py-8 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Mes prestations</h2>
      </div>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">        
        <!-- Service 1 : Référencement nouveau clients / réseaux de distribution -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-network-wired text-green-600 text-4xl mb-4"></i> <!-- Icône mise à jour -->
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Référencement nouveau clients / réseaux de distribution</h3>
          <p class="text-gray-700 mb-4">Identifiez de nouvelles opportunités de croissance grâce à une analyse approfondie de votre marché.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Service 2 : Développements de nouveaux produits / concepts -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-lightbulb text-green-600 text-4xl mb-4"></i> <!-- Icône mise à jour -->
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Développements de nouveaux produits / concepts</h3>
          <p class="text-gray-700 mb-4">Renforcez votre position sur le marché avec des stratégies commerciales adaptées à vos objectifs.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>

        <!-- Service 3 : Négociations annuelles -->
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-handshake text-green-600 text-4xl mb-4"></i> <!-- Icône mise à jour -->
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Négociations annuelles</h3>
          <p class="text-gray-700 mb-4">Maximisez la performance de vos équipes de vente avec des formations personnalisées.</p>
          <NuxtLink to="/prestations" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Section Appel à l'Action -->
    <section class="py-8 bg-green-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-4">Prêt à faire évoluer votre entreprise ?</h2>
        <p class="text-lg mb-6">Contactez-moi pour discuter de la façon dont je peux vous aider à atteindre vos objectifs commerciaux.</p>
        <NuxtLink to="/contact" class="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100">Discutons Ensemble</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage"
}
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer {
  background-color: #003366;
}
footer img {
  max-width: 150px;
}
footer p,
footer ul,
footer a {
  font-size: 0.875rem;
}
</style>