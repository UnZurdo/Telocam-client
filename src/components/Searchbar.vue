<template>
  <v-toolbar flat>
    <!-- dropdown menu -->
    <v-menu offset-y>
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

      <v-list class="mt-3" style="width: 500px;" justify-center>
        <v-layout row wrap>
          <v-flex xs4 sm4 md4 v-for="link in links" :key="link.text">
            <v-list-tile router :to="link.route">
              <v-layout column wrap class="item my-5">
                <v-flex>
                  <v-list-tile-action class="justify-center">
                    <v-icon class="black--text">{{ link.icon }}</v-icon>
                  </v-list-tile-action>
                </v-flex>
                <v-flex>
                  <v-list-tile-title>
                    <div class="textbox">{{ link.text }}</div>
                  </v-list-tile-title>
                </v-flex>
              </v-layout>
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
        { icon: "dashboard", text: "Todas", route: "/" },
        { icon: "work_outline", text: "Coches", route: "/empleos" },
        { icon: "list_alt", text: "Inmobiliaria", route: "/empresas" },

        { icon: "person", text: "Motos", route: "/profile" },
        {
          icon: "verified_user",
          text: "Motor y Accesorios",
          route: "/admin"
        },
        { icon: "person", text: "TV, Audio y Foto", route: "/profile" },
        { icon: "person", text: "Móviles y Telefonía", route: "/profile" },
        {
          icon: "person",
          text: "Informática y Electrónica",
          route: "/profile"
        },
        { icon: "person", text: "Deporte y Ocio", route: "/profile" },
        { icon: "person", text: "Bicicletas", route: "/profile" },
        { icon: "person", text: "Consolas y Videojuegos", route: "/profile" },
        { icon: "person", text: "Hogar y Jardín", route: "/profile" },
        { icon: "person", text: "Moda y Accesorios", route: "/profile" },
        { icon: "person", text: "Cine, Libros y Música", route: "/profile" },
        { icon: "person", text: "Niños y Bebés", route: "/profile" },
        { icon: "person", text: "Construcción y Reformas", route: "/profile" },
        { icon: "person", text: "Industria y Agricultura", route: "/profile" },
        { icon: "person", text: "Servicios", route: "/profile" },

        { icon: "person", text: "Otros", route: "/profile" }
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

.textbox {
  font-size: 10pt;

  text-align: center;
}

.item {
}
.tile {
}
</style>
