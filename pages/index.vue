<template>
  <div>
    <section class="hero-section bg-cover bg-center py-12 text-white" style="background-image: url('/images/hero-bg.jpg');">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex justify-center mb-6">
          <img src="../assets/devco-agro.png" alt="DevcoAgro" class="w-96 h-auto object-cover" />
        </div>
        <h3 class="text-4xl text-gray-800 font-bold mb-2">
          Consultant indépendant spécialisé dans le développement commercial et l'innovation
        </h3>
        <p class="text-xl text-gray-800 mb-2">
          Boostez votre croissance avec des stratégies sur-mesure adaptées à votre entreprise.
        </p><br>
        <NuxtLink to="/contact" class="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-100">
          Contactez-moi dès aujourd'hui
        </NuxtLink>
      </div>
    </section>

    <section class="py-8 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h3 class="text-4xl font-bold mb-4 text-gray-800">Mes prestations</h3>
      </div>
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-network-wired text-green-600 text-4xl mb-4"></i>
          <h4 class="text-2xl font-semibold mb-4 text-green-600">Référencement nouveaux clients / réseaux de distribution</h4>
          <p class="text-gray-700 mb-4">Identifiez de nouvelles opportunités de croissance grâce à un nouveau portefeuille clients.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-handshake text-green-600 text-4xl mb-4"></i>
          <h4 class="text-2xl font-semibold mb-4 text-green-600">Développement commercial</h4>
          <p class="text-gray-700 mb-4">Management de transition / développement commercial comptes clés.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-lightbulb text-green-600 text-4xl mb-4"></i>
          <h4 class="text-2xl font-semibold mb-4 text-green-600">Accompagnement dans le domaine de l'innovation</h4>
          <p class="text-gray-700 mb-4">Renforcez votre position sur le marché via la créativité et le développement de nouveaux produits.</p>
        </div>
      </div>
    </section>

    <section class="py-8 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h3 class="text-4xl font-bold mb-4 text-gray-800">Pourquoi choisir mes services ?</h3>
        <p class="text-lg text-gray-600 mb-6">Fort de 25 ans d'expérience dans le commerce du secteur agroalimentaire, j'accompagne les entreprises dans leur développement commercial à travers différentes missions adaptées à leurs besoins.</p>
        <NuxtLink to="/parcours" class="text-green-600 hover:underline">En savoir plus &rarr;</NuxtLink>
      </div>
    </section>

    <section class="py-8 bg-green-600 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-3xl font-semibold mb-4">Prêt à faire évoluer votre entreprise ?</h3>
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