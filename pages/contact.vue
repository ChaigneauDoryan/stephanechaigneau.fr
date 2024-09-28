<template>
  <div>
    <section class="py-8 bg-white mt-8">
      <h2 class="text-4xl font-bold text-center">Contact</h2>
      <form @submit.prevent="sendEmail" class="max-w-xl mx-auto mt-8 relative">
        <!-- Champ Nom -->
        <div class="mb-4">
          <label class="block text-gray-700">Nom :</label>
          <input v-model="name" 
                 :class="{'border-red-500': nameError}" 
                 type="text" 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md" 
                 placeholder="Votre nom">
          <span v-if="nameError" class="text-red-500 text-sm">Le champ Nom est obligatoire et doit contenir moins de 50 caractères.</span>
        </div>
        
        <!-- Champ Email -->
        <div class="mb-4">
          <label class="block text-gray-700">Email :</label>
          <input v-model="email" 
                 :class="{'border-red-500': emailError}" 
                 type="email" 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md" 
                 placeholder="Votre email">
          <span v-if="emailError" class="text-red-500 text-sm">L'e-mail est obligatoire et doit être valide.</span>
        </div>
        
        <!-- Liste Déroulante -->
        <div class="mb-4">
          <label class="block text-gray-700">Sélectionnez un motif :</label>
          <select v-model="motif" 
                  :class="{'border-red-500': motifError}" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option value="">Sélectionnez un motif</option>
            <option value="Demande de rendez-vous">Demande de rendez-vous</option>
            <option value="Demande de renseignements">Demande de renseignements</option>
          </select>
          <span v-if="motifError" class="text-red-500 text-sm">Veuillez sélectionner un motif.</span>
        </div>
        
        <!-- Champ Message -->
        <div class="mb-4">
          <label class="block text-gray-700">Message :</label>
          <textarea v-model="message" 
                    :class="{'border-red-500': messageError}" 
                    rows="5" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    placeholder="Votre message"></textarea>
          <span v-if="messageError" class="text-red-500 text-sm">Le champ Message est obligatoire.</span>
        </div>

        <!-- Bouton d'envoi et Popup -->
        <div class="flex items-center">
          <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Envoyer
          </button>

          <!-- Popup de confirmation à côté du bouton -->
          <div v-if="showPopup" class="ml-4 bg-green-500 text-white p-3 rounded-md shadow-lg">
            Message envoyé avec succès !
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  data() {
    return {
      name: localStorage.getItem('name') || '',
      email: localStorage.getItem('email') || '',
      motif: localStorage.getItem('motif') || '',
      message: localStorage.getItem('message') || '',
      nameError: false,
      emailError: false,
      motifError: false,
      messageError: false,
      showPopup: false,
    };
  },
  watch: {
    name(newValue) {
      localStorage.setItem('name', newValue);
    },
    email(newValue) {
      localStorage.setItem('email', newValue);
    },
    motif(newValue) {
      localStorage.setItem('motif', newValue);
    },
    message(newValue) {
      localStorage.setItem('message', newValue);
    }
  },
  methods: {
    validateForm() {
      this.nameError = this.name === '' || this.name.length > 50;
      this.emailError = !/.+@.+\..+/.test(this.email);
      this.motifError = this.motif === '';
      this.messageError = this.message === '';

      return !(this.nameError || this.emailError || this.motifError || this.messageError);
    },
    sendEmail() {
      if (this.validateForm()) {
        try {
          emailjs.send('serviceOutlook', 'contactTemplateDevcoAggr', {
            name: this.name,
            email: this.email,
            motif: this.motif,
            message: this.message,
          }, 'XW_jKn2feX3p2OPzM')
          .then(() => {
            this.showPopupMessage();
            this.resetForm();
          })
          .catch(error => {
            console.error("Erreur lors de l'envoi de l'e-mail : ", error);
            alert("Une erreur s'est produite, veuillez réessayer !");
          });
        } catch (error) {
          console.log("Erreur : ", error);
        }
      }
    },
    showPopupMessage() {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 5000);
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.motif = '';
      this.message = '';
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('motif');
      localStorage.removeItem('message');
    }
  }
};
</script>

<style scoped>
.border-red-500 {
  border-color: #f56565;
}
</style>