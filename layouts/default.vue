<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow">
      <Header />
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.min-h-screen {
  min-height: 100vh;
}
.flex-grow {
  flex-grow: 1;
}
</style>
