<template>
  <div class="dashboard">
    <sidebar-menu :menu="menu" width="200px"/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store.js";
import { API_BASE } from "../config";
import "font-awesome/css/font-awesome.css";

export default {
  props: ["value"],
  mounted() {
    this.$emit("input", false);
  },

  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation"
          // component: componentName
          // visibleOnCollapse: true
        },
        {
          title: "Perfil",
          href: "/dashboard/perfil/",
          icon: "fa fa-user"
        },

        {
          title: "Productos",
          icon: "fa fa-th",
          child: [
            {
              href: "/dashboard/productos/",
              title: "Productos"
            },
            {
              href: "/dashboard/productos/vendidos",
              title: "Vendidos"
            }
          ]
        },
        {
          title: "Mensajes",
          href: "/dashboard/mensajes/",
          icon: "fa fa-envelope"
        },
        {
          title: "Favoritos",
          href: "/dashboard/favoritos/",
          icon: "fa fa-heart"
        },
        {
          title: "Opiniones",
          href: "/dashboard/opiniones/",
          icon: "fa fa-star"
        },
        {
          title: "Estadisticas",
          href: "/dashboard/estadisticas/",
          icon: "fa fa-signal"
        }
      ]
    };
  }
};
</script> 

<style scope>
.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  max-height: 10px !important;
}

.v-sidebar-menu .vsm-header {
  margin-top: 10%;
}

.v-sidebar-menu {
  margin-right: 50%;
}
</style>

