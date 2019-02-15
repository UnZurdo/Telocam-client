<template>
  <div class="login">
    <v-container class="pa-5">
      <v-card class="pa-3">
        <v-card-title class="text-center">
          <v-container>
            <h1 class="heading grey--text">Tu cuenta ha saido confirmada</h1>
            <p class="font-weight-light">
              <router-link to="/login">
                <a>Redirigir a la página principal</a>
              </router-link>
            </p>
          </v-container>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { API_BASE } from "../config";

export default {
  data() {
    return {};
  },
  methods: {
    postData() {
      axios
        .get(`${API_BASE}/user/confirm?token=` + this.$route.params.token, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.token
          }
        })
        .then(response => {
          console.log(response);
        });
    }
  },
  mounted() {
    this.postData();
  }
};
</script>