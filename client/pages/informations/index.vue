<template>
  <div id="informations">
    <b-container fluid>
      <b-row>
        <b-col md="4">
          <h1>Informations</h1>
          <p>Espace Contrats est une application VueJs qui permet à l'utilisateur de consulter ses contrats et de modifier ses informations personnelles.</p>
          <p>Pour le moment l'application marche en local, le serveru est sur le port 3000 et le client sur le port 8080.</p>
          <p>Ce projet est développé en Javascript avec NuxtJs et NestJs, et Postgresql.</p>
          <a href="https://nestjs.com/" target="blank"><b-img src="https://docs.nestjs.com/assets/logo-small.svg" width="75" height="75"></b-img></a>
          <a href="https://fr.nuxtjs.org/" target="blank"><b-img src="https://nuxtjs.org/logos/nuxt-square.svg" width="75" height="75"></b-img></a>
          <a href="https://bootstrap-vue.org/" target="blank"><b-img
            src="https://avatars1.githubusercontent.com/u/22965283?s=200&v=4"
            width="75"
            height="75"
          ></b-img></a>
          <a href="https://www.postgresql.org/" target="blank"><b-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png"
            width="75"
            height="75"
          ></b-img></a>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2>Roadmap</h2>
          <p>
            <ul>            
              <li>Setup serveur bdd </li>
              <li>Ajout modification de mot de passe & confirmation par mail</li>
              <li>Ajouter la création de compte</li>
              <li>Ajouter la suppression de compte</li>
              <li>Ajouter un thème dark</li>
              <li>Ajouter une image à un utilisateur</li>
            </ul>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
};
</script>

<style scoped>
#espaceclient {
  margin-top: 40px;
}
.submitbutton {
  background-color: rgb(2, 197, 142) !important;
}
</style>