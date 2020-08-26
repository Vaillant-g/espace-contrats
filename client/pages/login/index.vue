<template>
  <div id="login">
    <b-container fluid>
      <b-row>
        <b-col md="4">
          <h1>Login</h1>
          <!-- <p>{{ this.$store.state.authenticated}}</p> -->
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
            <!-- password -->
            <b-form-group id="input-group-2" label="Mot de passe:" label-for="input-2">
              <b-form-input
                id="password"
                v-model="form.password"
                required
                type="password"
                placeholder="Mot de passe"
              ></b-form-input>
            </b-form-group>

            <b-button classs="submitbutton" type="submit">Valider</b-button>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
          </b-card>-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        identifiant: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      console.log(this.form.identifiant);
      console.log(this.form.password);
      this.$store.commit("login");
      this.$store.commit("setIdentifiant", this.form.identifiant);
      //      window.location.href = "/";
      this.$router.push('/')
    },
  },
};
</script>

<style scoped>
/* #login {
  margin-top: 40px;
} */
.submitbutton {
  background-color: rgb(2, 197, 142) !important;
}
</style>