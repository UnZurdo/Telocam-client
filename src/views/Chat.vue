<template>
  <div class="mensajes">
    <v-container>
      <basic-vue-chat
        :initial-feed="feed"
        :initialAuthorId="0"
        @newOwnMessage="sendMessage"
        :title="''"
      />
    </v-container>
  </div>
</template>


<script>
import axios from "axios";
import store from "../store.js";
import { API_BASE } from "../config";
import BasicVueChat from "basic-vue-chat";
import moment from "moment";

import io from "socket.io-client";

export default {
  components: { BasicVueChat },
  name: "Chat",
  data() {
    return {
      user: localStorage.user,
      seller: "",
      msg: "",
      buyer: "",
      token: store.getters.token,
      user: localStorage.user,
      socket: io(`${API_BASE}/mychat`),
      conversaciones: [],
      rendered: false,
      feed: [
        {
          id: 0,
          author: "Person",
          contents: "¿Tienes alguna pregunta?",
          date: "16:30"
        }
      ]
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
        const msg = response.data.data;
        const messages = msg.map(m => this.parseMsg(m));
        this.conversaciones = messages;
        console.log("Mounted", this.conversaciones, this.feed);
      });

    this.socket.emit("JOINED", {
      room: this.$route.params.id
    });

    this.socket.on("MESSAGE", data => {
      console.log("MESSAGE", data);
      var msg = this.parseMsg(data);
      this.conversaciones.push(msg);
      this.msg = msg.contents;
    });
  },
  methods: {
    parseMsg(data) {
      var dateParsed = data.created_date.split("T");
      var hourParsed = dateParsed[1].split(":");
      var hour = hourParsed[0] + ":" + hourParsed[1];
      var res = {
        id: data.user === this.user ? 1 : 0,
        author: data.user === this.user ? "Me" : "Person",
        contents: data.text,
        date: hour
      };
      this.feed.push(res);
      return res;
    },
    sendMessage(msg) {
      console.log("SEND_MESSAGE", msg);
      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        text: msg,
        conversacion: this.$route.params.id,
        room: this.$route.params.id,
        created_date: moment().format()
      });
    }
  },
  computed: {}
};
</script>

<style  scoped>
.window__header__container {
  background: linear-gradient(90deg, #888888, #909090) !important;
}
</style>
