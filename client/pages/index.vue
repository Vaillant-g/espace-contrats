<template>
  <div id="espacecontrats">
    <b-container fluid>
      <h1>Espace contrats</h1>
      <b-table hover :items="items">
        <nuxt-link to="/">Accueil</nuxt-link>
      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* #espacecontrats {
  margin-top: 40px;
} */
</style>

<script>
import axios from 'axios';
export default {
  middleware: 'authenticated',
  data() {
    return {
      items: [
        { id: 1, Utilisateur: 'John', Description: 'Lorem ipsum dolor sit amet' },
        { id: 2, Utilisateur: 'Doe', Description: 'Lorem ipsum dolor sit amet' },
        { id: 3, Utilisateur: 'Rock', Description: 'Lorem ipsum dolor sit amet' },
        { id: 4, Utilisateur: 'Mage', Description: 'Lorem ipsum dolor sit amet' },
        { id: 5, Utilisateur: 'Viktor', Description: 'Lorem ipsum dolor sit amet' },
        { id: 6, Utilisateur: 'Lex', Description: 'Lorem ipsum dolor sit amet' },
        { id: 7, Utilisateur: 'Kinessa', Description: 'Lorem ipsum dolor sit amet' },
      ],
    };
  },
  mounted() {
    //    axios.get("https://api.mocki.io/v1/13f44462").then((response) => {
//      console.log('http://localhost:3000/' + this.$store.state.identifiant);
    axios.get('http://localhost:3000/contrats').then(response => {
      this.contrats = response.data;
      console.log(this.contrats);
    });
  },
};
</script>