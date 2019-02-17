<template>
  <div class="mensajes mb-4" style="margin-bottom: 10%;">
    <v-container>
      <h1 class="heading grey--text ml-4">Chats</h1>
    </v-container>
    <v-container class="mb-4">
      <v-layout row justify-start mb-2></v-layout>
      <v-container fluid grid-list-md style="margin-bottom: 40%;">
        <v-layout column wrap>
          <div v-for="(chat, index) in conversaciones" :key="index">
            <v-flex d-flex xs5 sm5 md5 flat>
              <v-card router :to="`/dashboard/mensajes/${chat.id}`" class="ma-1">
                <div class="ma-3">
                  <h3 v-if="chat.seller_email != user">{{ chat.seller_email }}</h3>
                  <h3 v-if="chat.buyer_email != user">{{ chat.buyer_email }}</h3>
                </div>
              </v-card>
            </v-flex>
          </div>
          <v-flex xs5 sm5 md5></v-flex>
        </v-layout>
        <v-flex
          xs12
          sm8
          md5
          class="mt-5"
          style="position: absolute; right: 10%; top: 0px; width: 60%;"
        >
          <router-view :key="$route.fullPath"></router-view>
        </v-flex>
      </v-container>
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
