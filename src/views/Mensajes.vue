<template>
  <div class="mb-4">
    <v-container style="margin-left:15%;">
      <v-layout row>
        <v-flex d-flex xs4 sm4 md4 class="white" style="min-height: 100vh;">
          <v-layout column>
            <v-list>
              <v-list-tile
                style="height:50px;"
                v-for="(chat, index) in conversaciones"
                :key="index"
                router
                :to="`/dashboard/mensajes/${chat.id}`"
              >
                <v-flex d-flex xs12 sm12 md12>
                  <v-list-tile-title>
                    <div style="text-align: center">
                      <h3 v-if="chat.seller_email != user">{{ chat.seller_email }}</h3>
                      <h3 v-if="chat.buyer_email != user">{{ chat.buyer_email }}</h3>
                    </div>
                    <v-divider></v-divider>
                  </v-list-tile-title>
                </v-flex>
                <v-divider dark></v-divider>
              </v-list-tile>
            </v-list>
          </v-layout>
          <v-divider vertical dark></v-divider>
        </v-flex>

        <v-flex xs8 sm8 md12 class="white" style="min-height: 100vh;">
          <v-layout wrap>
            <v-flex d-flex xs12 style="margin-top:-7%;">
              <v-divider vertical dark></v-divider>
              <router-view :key="$route.fullPath" v-model="seller"></router-view>
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
      counter: 0,
      active_el: 0
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
  computed: {},
  methods: {
    activate: function(el) {
      console.log("Active:", el);
      this.active_el = el;
    }
  }
};
</script>

<style scoped>
.active {
  color: red;
  font-weight: bold;
}
</style>
