<template>
  <v-toolbar flat>
    <!-- dropdown menu -->
    <v-menu offset-y>
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>

      <v-list class="mt-3" style="width: 800px;" justify-center>
        <v-layout row wrap>
          <v-flex xs3 sm3 md3 v-for="link in links" :key="link.text">
            <v-list-tile router :to="link.route" style="height:60px;">
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
    <v-toolbar-items class="hidden-sm-and-down">
      <suggestions
        v-model="searchQuery"
        :onItemSelected="onSearchItemSelected"
        :onInputChange="onInputChange"
        options.placeholder="Buscar ..."
      >
        <div slot="item" slot-scope="props" class="single-item">
          <template v-if="props.item.Icon && props.item.Icon.URL"></template>
          <span class="name">{{props.item.Text}}</span>
        </div>
      </suggestions>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
import Suggestions from "v-suggestions";
import axios from "axios";
export default {
  components: { Suggestions },
  data() {
    return {
      search: "",
      searchQuery: "",

      selectedSearchItem: null,
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
  },
  methods: {
    onInputChange(query) {
      if (query.trim().length === 0) {
        return null;
      }
      const url = `http://api.duckduckgo.com/?q=${query}&format=json&pretty=1`;
      return new Promise(resolve => {
        axios.get(url).then(response => {
          const items = [];
          response.data.RelatedTopics.forEach(item => {
            if (item.Text) {
              items.push(item);
            } else if (item.Topics && item.Topics.length > 0) {
              item.Topics.forEach(topic => {
                items.push(topic);
              });
            }
          });
          resolve(items);
        });
      });
    },
    onSearchItemSelected(item) {
      this.selectedSearchItem = item;
    }
  }
};
</script>

<style >
.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  max-height: 10px !important;
}

.textbox {
  font-size: 10pt;
  text-align: center;
}

.items {
  border-radius: 10px;
  width: 400px;
  background-color: rgb(250, 250, 250);
}

.item {
  border-radius: 10px;
  width: 400px;
}
.tile {
}

.name {
  font-size: 10pt;
  color: black;
}

.v-suggestions {
  border-radius: 10px;
  position: absolute;
}

.suggestions {
  border-radius: 20px;
  margin-top: 7%;
}
.v-suggestions input {
  margin-top: 8%;
  border-style: solid;
  color: inherit;
  border-radius: 6px;
  height: 50%;
  font-size: 13pt;
}
</style>
