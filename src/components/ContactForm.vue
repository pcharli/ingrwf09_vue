<template>
  <div>
      <!-- test si switch == false -->
    <form @submit="soumettre" v-if="!envoi" action="">
      <label for="">Nom :</label>
      <input type="text" required v-model.lazy.trim="newContact.nom" />
      <label for="">Prénom :</label>
      <input type="text" required v-model.lazy.trim="newContact.prenom" />
      <label for="">Email : </label>
      <input type="email" required v-model.lazy.trim="newContact.email" />
      <label for="">Message : </label>
      <textarea name="" v-model.lazy.trim="newContact.message" required id="" cols="30" rows="10"></textarea>
      <button>Envoyer</button>
    </form>
    <!-- si switch != false -->
    <p v-else>Message envoyé</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        envoi : false, //switch
        newContact: {
            nom:"",
            prenom:"",
            email:"",
            message:""
        }
    }
  },
  methods: {
      soumettre() {
          this.envoi = true //change switch
      }
  }
};
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
    }
    label {
        text-align: left;
        font-weight: bold;
        margin-top: 1rem;
    }
    button {
        margin-top: 1rem;
    }
    input, button {
        height: 2rem;
    }
</style>
