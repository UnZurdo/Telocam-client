<template>
  <div class="dashboard">
    <v-layout justify-center class="mb-3">
      <v-container grid-list-md class="ma-3">
        <v-layout row wrap justify-center>
          <v-flex class="ma-1 grey" xs12 sm5 md3>
            <v-card class="ma-1">
              <v-layout class="ma-1 mx-5" style="width: 200px;" row wrap></v-layout>
            </v-card>
          </v-flex>

          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>
          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>
          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>

          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>

          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>
          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>
          <v-flex class="ma-1" xs12 sm5 md3>
            <card id="item"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store.js";
import { API_BASE } from "../config";
import card from "../components/card";

export default {
  components: { card },
  name: "Dashboard",
  data() {
    return {
      user: null,
      empresa: "",
      empresas: null,
      token: store.getters.token,
      posts: [
        {
          title: "Chaqueta de cuero Bershka",
          body:
            "Talla L. (es color rojo pero con el flash parece fucsia). En buen estado",
          price: 32
        },
        {
          title: "Chaqueta de cuero Bershka",
          body:
            "Talla L. (es color rojo pero con el flash parece fucsia). En buen estado",
          price: 32
        },
        {
          title: "Chaqueta de cuero Bershka",
          body:
            "Talla L. (es color rojo pero con el flash parece fucsia). En buen estado",
          price: 32
        }
      ]
    };
  },
  mounted() {
    console.log(this.posts);
    const URL = `${API_BASE}/user/` + localStorage.user;
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.token
        }
      })
      .then(response => {
        this.user = response.data.data;
        this.empresa = response.data.data.esEmpresa;
        console.log(response.data.data);
      });
  },
  computed: {
    esEstudiante: function() {
      if (!this.empresa) return true;
    },
    esEmpresa: function() {
      if (this.empresa) return true;
    }
  }
};
</script>
<style scope>
#item {
  border-radius: 12px;
}
</style>
