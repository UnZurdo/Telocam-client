<template>
  <v-app id="app" class="grey lighten-4">
    <Navbar v-bind:onClick="logout" v-bind:method="login"/>

    <v-content class="mx-4 mb-4">
      <router-view v-model="footer"></router-view>
    </v-content>
    <Footer v-if="footer"/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//App.vue
import { SidebarMenu } from "vue-sidebar-menu";

export default {
  components: { Navbar, Footer, SidebarMenu },
  name: "App",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      console.log("logout");

      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    login: function() {
      console.log("Login");
      this.$router.push("/login");
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },

  data() {
    return {
      footer: true
    };
  }
};
</script>