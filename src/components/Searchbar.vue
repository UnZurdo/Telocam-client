<template>
  <v-toolbar flat>
    <!-- dropdown menu -->
    <v-menu offset-y>
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

      <v-list class="mt-3">
        <v-layout row wrap>
          <v-flex xs4 sm4 md4 v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile>
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
            </v-list-tile>
          </v-flex>
        </v-layout>
      </v-list>
    </v-menu>
    <v-toolbar-items offset-y class="hidden-sm-and-down">
      <v-text-field
        solo
        class="styled-input mt-2"
        height="1"
        placeholder="Buscar"
        color="white"
        append-icon="search"
        v-model="search"
      ></v-text-field>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  data() {
    return {
      search: "",

      user: localStorage.user,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "work_outline", text: "Empleos", route: "/empleos" },
        { icon: "list_alt", text: "Empresas", route: "/empresas" },

        { icon: "person", text: "Profile", route: "/profile" },
        { icon: "verified_user", text: "Admin", route: "/admin" }
      ]
    };
  }
};
</script>

<style scope>
.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  max-height: 10px !important;
}
</style>
