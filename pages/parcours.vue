<template>
  <div>
    <section class="py-8 bg-white mt-8">
      <h2 class="text-4xl font-bold text-center mb-12">Parcours</h2>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Carte 1 -->
        <div 
          class="group perspective w-full md:w-128 mx-auto" 
          @click="toggleFlip('card1')"
          :class="{'cursor-pointer': isMobile}"
        >
          <div 
            class="relative w-full h-80 transform-style preserve-3d transition-transform duration-700"
            :class="{'rotate-y-180': flippedCard === 'card1' && isMobile, 'group-hover:rotate-y-180': !isMobile}"
          >
            <!-- Recto -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-center group-hover:shadow-2xl transition-shadow duration-300">
              <i class="fas fa-briefcase text-green-600 text-4xl mb-4"></i>
              <h3 class="text-2xl font-bold mb-2">Expérience métier</h3>
              <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-sync-alt mr-2"></i>
                <span class="text-sm" v-if="isMobile">Cliquez pour retourner</span>
                <span class="text-sm" v-else>Survolez pour retourner</span>
              </div>
            </div>
            <!-- Verso -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-green-600 shadow-lg rounded-lg p-6 rotate-y-180 flex flex-col justify-center items-center text-center">
              <h2 class="text-xl font-bold text-white mb-4">Solide expérience en gestion de comptes clés et en direction commerciale depuis plus de 20 ans dans le secteur de l'agroalimentaire.</h2>
            </div>
          </div>
        </div>
        
        <!-- Carte 2 -->
        <div 
          class="group perspective w-full md:w-128 mx-auto" 
          @click="toggleFlip('card2')"
          :class="{'cursor-pointer': isMobile}"
        >
          <div 
            class="relative w-full h-80 transform-style preserve-3d transition-transform duration-700"
            :class="{'rotate-y-180': flippedCard === 'card2' && isMobile, 'group-hover:rotate-y-180': !isMobile}"
          >
            <!-- Recto -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-center group-hover:shadow-2xl transition-shadow duration-300">
              <i class="fas fa-industry text-green-600 text-4xl mb-4"></i>
              <h3 class="text-2xl font-bold mb-2">Expérience sectorielle</h3>
              <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-sync-alt mr-2"></i>
                <span class="text-sm" v-if="isMobile">Cliquez pour retourner</span>
                <span class="text-sm" v-else>Survolez pour retourner</span>
              </div>
            </div>
            <!-- Verso -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-green-600 shadow-lg rounded-lg p-6 rotate-y-180 flex flex-col justify-center items-center text-center">
              <h2 class="text-xl font-bold text-white mb-4">Parfaite connaissance du marché des produits de la mer et des circuits de distribution GMS frais, RHD surgelés et circuits spécialisés en frais et surgelés</h2>
            </div>
          </div>
        </div>
        
        <!-- Carte 3 -->
        <div 
          class="group perspective w-full md:w-128 mx-auto" 
          @click="toggleFlip('card3')"
          :class="{'cursor-pointer': isMobile}"
        >
          <div 
            class="relative w-full h-80 transform-style preserve-3d transition-transform duration-700"
            :class="{'rotate-y-180': flippedCard === 'card3' && isMobile, 'group-hover:rotate-y-180': !isMobile}"
          >
            <!-- Recto -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-center group-hover:shadow-2xl transition-shadow duration-300">
              <i class="fas fa-question-circle text-green-600 text-4xl mb-4"></i>
              <h3 class="text-2xl font-bold mb-2">Pourquoi choisir mes services ?</h3>
              <div class="absolute bottom-4 right-4 flex items-center text-gray-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-sync-alt mr-2"></i>
                <span class="text-sm" v-if="isMobile">Cliquez pour retourner</span>
                <span class="text-sm" v-else>Survolez pour retourner</span>
              </div>
            </div>
            <!-- Verso -->
            <div class="absolute inset-0 backface-hidden w-full h-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg rounded-lg p-6 rotate-y-180 flex flex-col justify-center text-center text-white">
              <!-- Design plus original -->
              <div class="space-y-4">
                <div class="flex items-center justify-center">
                  <i class="fas fa-tools text-2xl mr-2"></i>
                  <span class="font-bold">Opérationnalité</span>
                  <p class="ml-2">Une approche opérationnelle et pragmatique des missions.</p>
                </div>
                <div class="flex items-center justify-center">
                  <i class="fas fa-arrows-alt text-2xl mr-2"></i>
                  <span class="font-bold">Souplesse</span>
                  <p class="ml-2">Structure légère capable de s'adapter aux contraintes et spécificités des clients.</p>
                </div>
                <div class="flex items-center justify-center">
                  <i class="fas fa-chart-line text-2xl mr-2"></i>
                  <span class="font-bold">Vision à long terme</span>
                  <p class="ml-2">Volonté d'établir une relation de partenariat durable.</p>
                </div>
              </div>
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
      isMobile: false,
      flippedCard: null 
    };
  },
  mounted() {
    this.isMobile = /Mobi|Android/i.test(navigator.userAgent);
  },
  methods: {
    toggleFlip(card) {
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