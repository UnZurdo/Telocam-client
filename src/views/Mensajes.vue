<template>
  <div class="mb-4">
    <v-container style="margin-top: -1.4%;margin-left:15%;">
      <v-layout row>
        <v-flex d-flex xs4 sm4 md4 class="white" style="min-height: 100vh;">
          <v-layout column>
            <div v-for="(chat, index) in conversaciones" :key="index">
              <v-flex d-flex xs12 sm12 md12 flat>
                <v-card flat router :to="`/dashboard/mensajes/${chat.id}`" class="ma-1">
                  <div class="ma-3">
                    <h3 v-if="chat.seller_email != user">{{ chat.seller_email }}</h3>
                    <h3 v-if="chat.buyer_email != user">{{ chat.buyer_email }}</h3>
                  </div>
                </v-card>
              </v-flex>
              <v-divider dark="true"></v-divider>
            </div>
          </v-layout>
          <v-divider vertical="true" dark="true"></v-divider>
        </v-flex>

        <v-flex xs6 sm6 md6 class="white" style="min-height: 100vh;">
          <v-layout wrap>
            <v-flex d-flex xs12 style="margin-top:-16%;">
              <v-divider vertical="true" dark="true"></v-divider>
              <router-view :key="$route.fullPath"></router-view>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store.js";
import { API_BASE } from "../config";

export default {
  components: {},
  name: "Mensajes",
  data() {
    return {
      user: localStorage.user.email,
      seller: "",
      buyer: "",
      token: store.getters.token,
      conversaciones: null,
      user: localStorage.user,
      counter: 0
    };
  },
  mounted() {
    const URL = `${API_BASE}/chat/all/` + localStorage.user;
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.token
        }
      })
      .then(response => {
        this.conversaciones = response.data.data;
        console.log(this.conversaciones);
      });
  },
  computed: {}
};
</script>
