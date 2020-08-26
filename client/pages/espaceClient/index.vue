<template>
  <div id="espaceclient">
    <b-container fluid>
      <b-row>
        <b-col md="4">
          <h1>Espace client</h1>
          <b-form @submit="onSubmit" v-if="show">
            <!-- identifiant -->
            <b-form-group id="input-group-2" label="Identifiant:" label-for="input-2">
              <b-form-input
                id="identifiant"
                v-model="form.identifiant"
                required
                placeholder="identifiant"
              ></b-form-input>
            </b-form-group>
            <!-- prenom -->
            <b-form-group id="input-group-2" label="Prénom:" label-for="input-2">
              <b-form-input id="prenom" v-model="form.prenom" required placeholder="prénom"></b-form-input>
            </b-form-group>
            <!-- nom -->
            <b-form-group id="input-group-2" label="Nom:" label-for="input-2">
              <b-form-input id="nom" v-model="form.nom" required placeholder="nom"></b-form-input>
            </b-form-group>
            <!-- email -->
            <b-form-group id="input-group-1" label="Email address:" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <!-- telephone -->
            <b-form-group id="input-group-2" label="Téléphone:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.telephone" required placeholder="prénom"></b-form-input>
            </b-form-group>

            <b-button classs="submitbutton" type="submit" variant="outline-secondary">Valider</b-button>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
          </b-card>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h1>Déconnexion</h1>
          <p>Vous déconnecter fermera votre session.</p>
          <b-button variant="danger" v-on:click="onClick">Déconnexion</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  data() {
    return {
      form: {
        identifiant: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onClick(evt) {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* #espaceclient {
  margin-top: 40px;
} */
.submitbutton {
  background-color: rgb(2, 197, 142) !important;
}
</style>