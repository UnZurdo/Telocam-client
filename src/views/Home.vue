<template>
  <div class="dashboard">
    <v-layout justify-center class="mb-3">
      <v-container class="ma-3 white">
        <v-layout row class="mb-3">
          <v-flex class="ma-2 grey" xs5 sm4 md3>
            <v-card class="ma-2">
              <v-layout class="ma-2 ml-4" row wrap></v-layout>
            </v-card>
          </v-flex>

          <v-flex class="ma-2 blue" xs7 sm8 md9>
            <v-card class="ma-2">
              <v-layout class="ma-2 ml-4" row wrap></v-layout>
            </v-card>
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

export default {
  components: {},
  name: "Dashboard",
  data() {
    return {
      user: null,
      empresa: "",
      empresas: null,
      token: store.getters.token
    };
  },
  mounted() {
    const URL = `${API_BASE}/user/` + localStorage.user;
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token
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
