<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar dark flat app>
      <router-link to="/" class="text grey--text">
        <img class="roundrect mr-4 mt-1" src="../assets/wallapop.jpg">
        <span class="font-weight-light"></span>
      </router-link>

      <Searchbar/>

      <v-menu offset-y>
        <v-btn router to="/dashboard/mensajes" color="white" flat slot="activator">
          <v-icon left>message</v-icon>
          <span>Mensajes</span>
        </v-btn>
      </v-menu>

      <v-menu v-if="isLoggedIn" offset-y>
        <v-btn router to="/dashboard/productos" color="white" flat slot="activator">
          <v-icon left>person</v-icon>
          <span>Mi zona</span>
        </v-btn>
      </v-menu>

      <v-btn flat color="white">
        <span v-if="isLoggedIn" @click="onClick()">Logout</span>
        <span v-if="!isLoggedIn" @click="method()">Login</span>

        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
import Searchbar from "./Searchbar";
export default {
  props: {
    onClick: Function,
    method: Function
  },
  components: { Searchbar },
  data() {
    return {
      drawer: false,
      user: localStorage.user,

      snackbar: false
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}

.roundrect {
  width: 45px;
  border-radius: 12px;
}
</style>
