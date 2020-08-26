<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <nuxt-link to="/">Espace Contrats</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item></b-nav-item>
          <b-nav-item>
            <nuxt-link class="float-right" to="/informations">Informations</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>Profil</template>
            <b-dropdown-item>
              <nuxt-link class="deroule" to="/espaceclient">Espace client</nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <span class="deroule" v-on:click="onClick">Déconnexion</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(evt) {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: none;
  color: #2f495e;
}
a:focus {
  text-decoration: none;
  color: white;
}

.deroule {
  text-decoration: none;
  color: #2f495e !important;
}
</style>