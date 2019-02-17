<template>
  <div class="dashboard"></div>
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
