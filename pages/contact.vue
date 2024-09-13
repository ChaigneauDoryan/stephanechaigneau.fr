<template>
  <div>
    <section class="py-8 bg-white mt-8">
      <h2 class="text-4xl font-bold text-center">Contact</h2>
      <form class="max-w-xl mx-auto mt-8">
        <!-- Champ Nom -->
        <div class="mb-4">
          <label class="block text-gray-700">Nom:</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Votre nom">
        </div>
        <!-- Champ Email -->
        <div class="mb-4">
          <label class="block text-gray-700">Email:</label>
          <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Votre email">
        </div>
        <!-- Liste Déroulante -->
        <div class="mb-4">
          <label class="block text-gray-700">Sélectionnez un motif :</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value=""></option>
            <option value="option1">Demande de rdv</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <!-- Champ Message -->
        <div class="mb-4">
          <label class="block text-gray-700">Message:</label>
          <textarea rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Votre message"></textarea>
        </div>
        <!-- Bouton d'envoi -->
        <button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>
</style>