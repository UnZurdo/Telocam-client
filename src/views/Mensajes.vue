<template>
  <div class="mensajes">
    <v-container>
      <h1 class="heading grey--text ml-4">Chats</h1>
    </v-container>
    <v-container>
      <v-layout row justify-start mb-2></v-layout>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm12 md12 flat v-for="chat in conversaciones" :key="chat.key">
            <v-card router :to="`/mensajes/${chat.id}`" class="ma-1">
              <v-layout row wrap>
                <v-flex class="ma-3" xs6 sm6 md6>
                  <h3 v-if="chat.seller_email != user">{{ chat.seller_email }}</h3>
                  <h3 v-if="chat.buyer_email != user">{{ chat.buyer_email }}</h3>
                </v-flex>
                <v-divider></v-divider>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
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
      user: localStorage.user
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
