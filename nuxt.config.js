export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Stéphane Chaigneau',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Stéphane Chaigneau. TODO'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "author", content: "Stéphane Chaigneau" },
      {
        name: "keywords",
        content: "Stéphane, Chaigneau, Stéphane Chaigneau, StéphaneChaigneau, stéphaneChaigneau, Stéphanechaigneau, stéphanechaigneau, stéphane, chaigneau, parcours professionnel, expérience, compétences, services, prestations, PME, EURL, freelance"
      },
      { property: "og:title", content: "Stéphane Chaigneau" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stephanechaigneau.fr/" },
      { property: "og:site_name", content: "Stéphane Chaigneau" },
      {
        property: "og:description",
        content: "Stéphane Chaigneau. TODO"
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/css/main.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/sitemap']
  ],

  sitemap: {
    hostname: 'https://stephanechaigneau.fr',
    routes: [
      '/parcours',
      '/prestations',
      '/contact'
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 8080
  }
}
