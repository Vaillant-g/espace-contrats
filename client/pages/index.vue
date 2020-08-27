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
import axios from "axios";
export default {
  middleware: "authenticated",
  data() {
    return {
      items: [
        { id: 1, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 2, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 3, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 4, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 5, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 6, Personne1: "Dickerson", Personne2: "Macdonald" },
        { id: 7, Personne1: "Dickerson", Personne2: "Macdonald" },
      ],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/contrats").then((response) => {
      this.contrats = response.data;
      console.log(this.contrats.json);
    });
  },
};
</script>