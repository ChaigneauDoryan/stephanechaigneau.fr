<template>
  <footer class="bg-blue-900 text-white py-8">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
      <!-- Logo et Adresse -->
      <div class="flex items-start">
        <!-- Logo -->
        <img src="../assets/me.jpg" alt="Logo" class="w-20 h-full object-cover mr-4" />

        <!-- Informations de Contact -->
        <div>
          <p class="text-white">Stéphane CHAIGNEAU</p>
          <p class="mt-2">41 Rue André Soulard<br>85000 La Roche-sur-Yon, France</p>
          <a href="mailto:stephane.chaigneau@hotmail.fr" class="mt-2 flex items-center text-white hover:underline">
            <i class="fas fa-envelope mr-2"></i>
            stephane.chaigneau@hotmail.fr
          </a>
          <a href="tel:+33674814090" class="flex items-center text-white hover:underline">
            <i class="fas fa-phone-alt mr-2"></i>
            +33 6 74 81 40 90
          </a>
        </div>
      </div>

      <!-- Menu du Site -->
      <div class="flex flex-col md:items-center md:justify-center">
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="text-white hover:underline">Accueil</NuxtLink></li>
          <li><NuxtLink to="/parcours" class="text-white hover:underline">Parcours</NuxtLink></li>
          <li><NuxtLink to="/prestations" class="text-white hover:underline">Prestations</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-white hover:underline">Contact</NuxtLink></li>
        </ul>
      </div>

      <!-- Réseaux Sociaux et Mentions Légales -->
      <div class="flex flex-col md:items-end">
        <a href="https://www.linkedin.com/in/stephane-chaigneau-426364a3/" target="_blank" class="flex items-center mb-4 text-white hover:underline">
          <i class="fab fa-linkedin mr-2"></i>
          Suivez-nous
        </a>
        <a href="#" class="text-white hover:underline">Mentions Légales</a>
      </div>
    </div>
    <div class="w-full bg-gray-800 text-white text-center py-2 mt-4">
      <!-- Texte de Copyright -->
      <p class="m-0">© 2024 Stéphane Chaigneau. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  margin: 0;
  padding: 0;
}
</style>
