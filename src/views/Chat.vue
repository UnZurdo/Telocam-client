<template>
  <div class="mensajes">
    <v-container>
      <h1 class="heading grey--text ml-4">Chats</h1>
    </v-container>
    <v-container>
      <v-layout row justify-start mb-2></v-layout>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex flat>
            <v-card v-for="chat in conversaciones" :key="chat.key" class="ma-1">
              <v-layout row wrap>
                <v-flex xs6 sm6 md6>
                  <h3 class="ma-4" v-if="user != chat.user">L: {{ chat.text }}</h3>
                </v-flex>

                <v-flex xs6 sm6 md6 class="text-xs-right">
                  <h3 class="ma-4" v-if="user == chat.user">R: {{ chat.text }}</h3>
                </v-flex>
              </v-layout>
            </v-card>
            <form v-on:submit.prevent="sendMessage">
              <v-text-field
                class="mx-1 mt-2"
                solo
                placeholder="Escribir mensaje ..."
                append-icon="send"
                v-model="msg"
                @click:append="sendMessage"
                clearable
              ></v-text-field>
            </form>
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

import io from "socket.io-client";

export default {
  components: {},
  name: "Chat",
  data() {
    return {
      user: localStorage.user,
      seller: "",
      msg: "",
      buyer: "",
      token: store.getters.token,
      conversaciones: [],
      user: localStorage.user,
      socket: io(`${API_BASE}/mychat`)
    };
  },
  mounted() {
    console.log(this.user);
    const URL = `${API_BASE}/chat/` + this.$route.params.id;
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

    this.socket.emit("JOINED", {
      room: this.$route.params.id
    });

    this.socket.on("MESSAGE", data => {
      console.log(data);
      this.conversaciones.push(data);
    });
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      console.log(this.socket);

      //this.conversaciones.push(new_msg);
      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        text: this.msg,
        conversacion: this.$route.params.id,
        room: this.$route.params.id
      });
      this.msg = "";
    }
  },
  computed: {}
};
</script>
