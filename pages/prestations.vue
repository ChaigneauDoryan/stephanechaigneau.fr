<template>
  <div>
    <!-- Section d'introduction avec un fond plus clair et une marge supérieure -->
    <section class="py-8 bg-white mt-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 text-gray-800">Mes Prestations</h2>
        <p class="text-lg text-gray-600 mb-8">En tant que consultant en stratégie commerciale, j'aide les entreprises à maximiser leur potentiel de croissance, optimiser leurs processus de vente, et former des équipes performantes.</p>
      </div>
    </section>

    <!-- Section des Prestations avec une grille moderne -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-network-wired text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Référencement nouveaux clients / réseaux de distribution</h3>
          <p class="text-gray-700 mb-4">Identifiez de nouvelles opportunités de croissance grâce à un nouveau portefeuille clients.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-handshake text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Gestion commerciale</h3>
          <p class="text-gray-700 mb-4">Management de transition ou suivi permanent des dossiers clients.</p>
        </div>
        <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <i class="fas fa-lightbulb text-green-600 text-4xl mb-4"></i>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Accompagnement dans le domaine de l'innovation</h3>
          <p class="text-gray-700 mb-4">Renforcez votre position sur le marché via la créativité et le développement de nouveaux produits.</p>
        </div>
      </div>
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