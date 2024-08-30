<template>
  <div>
    <section class="py-16">
      <h2 class="text-3xl font-semibold text-center">Parcours</h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Carte 1 -->
        <div 
          class="group perspective w-full md:w-64 mx-auto" 
          @click="toggleFlip('card1')"
          :class="{'cursor-pointer': isMobile}"
        >
          <div 
            class="relative w-full h-80 transform-style preserve-3d transition-transform duration-700"
            :class="{'rotate-y-180': flippedCard === 'card1' && isMobile, 'group-hover:rotate-y-180': !isMobile}"
          >
            <!-- Recto -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-white shadow-lg rounded-lg p-6 group-hover:shadow-2xl transition-shadow duration-300">
              <h3 class="text-2xl font-bold">Poste 1</h3>
              <p class="text-gray-600">Années : 2020 - 2023</p>
              <!-- Indicateur de retournement -->
              <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-sync-alt mr-2"></i>
                <span class="text-sm" v-if="isMobile">Cliquez pour retourner</span>
                <span class="text-sm" v-else>Survolez pour retourner</span>
              </div>
            </div>
            <!-- Verso -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-green-600 shadow-lg rounded-lg p-6 rotate-y-180">
              <h3 class="text-xl font-bold text-white">Principales missions</h3>
              <ul class="mt-4 text-white space-y-2">
                <li>- Mission 1</li>
                <li>- Mission 2</li>
                <li>- Mission 3</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Carte 2 -->
        <div 
          class="group perspective w-full md:w-64 mx-auto" 
          @click="toggleFlip('card2')"
          :class="{'cursor-pointer': isMobile}"
        >
          <div 
            class="relative w-full h-80 transform-style preserve-3d transition-transform duration-700"
            :class="{'rotate-y-180': flippedCard === 'card2' && isMobile, 'group-hover:rotate-y-180': !isMobile}"
          >
            <!-- Recto -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-white shadow-lg rounded-lg p-6 group-hover:shadow-2xl transition-shadow duration-300">
              <h3 class="text-2xl font-bold">Poste 2</h3>
              <p class="text-gray-600">Années : 2017 - 2020</p>
              <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-sync-alt mr-2"></i>
                <span class="text-sm" v-if="isMobile">Cliquez pour retourner</span>
                <span class="text-sm" v-else>Survolez pour retourner</span>
              </div>
            </div>
            <!-- Verso -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-green-600 shadow-lg rounded-lg p-6 rotate-y-180">
              <h3 class="text-xl font-bold text-white">Principales missions</h3>
              <ul class="mt-4 text-white space-y-2">
                <li>- Mission 1</li>
                <li>- Mission 2</li>
                <li>- Mission 3</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Carte 3 avec design entrelacé -->
<!-- Container pour les cartes entrelacées -->
<div class="relative w-full md:w-64 mx-auto h-96">
  <!-- Carte avant (recto) -->
  <div class="absolute top-0 left-0 w-3/4 h-3/4 bg-white rounded-lg shadow-lg z-20">
    <!-- Contenu du recto -->
    <div class="p-6">
      <h3 class="text-2xl font-bold">Poste 3</h3>
      <p class="text-gray-700">Années : 2014 - 2017</p>
      <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 transition-opacity duration-300">
        <i class="fas fa-sync-alt mr-2"></i>
        <span class="text-sm">Cliquez pour retourner</span>
      </div>
    </div>
  </div>

  <!-- Carte arrière (verso) avec décalage plus important vers le bas et la droite -->
  <div class="absolute -bottom-36 -right-20 w-3/4 h-3/4 bg-green-600 rounded-lg shadow-lg z-10">
    <!-- Contenu du verso -->
    <div class="p-6 text-white">
      <h3 class="text-xl font-bold">Principales missions</h3>
      <ul class="mt-4 space-y-2">
        <li>- Mission 1</li>
        <li>- Mission 2</li>
        <li>- Mission 3</li>
      </ul>
    </div>
  </div>
</div>


    </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Parcours",
  data() {
    return {
      isMobile: false, // Détecte si l'utilisateur est sur mobile
      flippedCard: null // Gère quelle carte est retournée
    };
  },
  mounted() {
    // Détecte si l'utilisateur est sur mobile
    this.isMobile = /Mobi|Android/i.test(navigator.userAgent);
  },
  methods: {
    toggleFlip(card) {
      // Bascule l'état de la carte sélectionnée
      if (this.isMobile) {
        this.flippedCard = this.flippedCard === card ? null : card;
      }
    }
  }
}
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.group:hover .relative {
  transform: rotateY(180deg);
}
</style>