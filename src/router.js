import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";

import Confirmar from "./views/Confirmar.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/Dashboard.vue";
import Home from "./views/Home.vue";

import Mensajes from "./views/Mensajes.vue";
import Chat from "./views/Chat.vue";

import Register from "./components/Register.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "mensajes",
          component: Mensajes,
          children: [
            {
              path: ":id",
              component: Chat
            }
          ]
        },
        {
          path: "perfil",
          component: Home
        },
        {
          path: "favoritos",
          component: Home
        },
        {
          path: "opiniones",
          component: Home
        },
        {
          path: "estadisticas",
          component: Home
        },
        {
          path: "productos",
          component: Home
        },
        {
          path: "productos/vendidos",
          component: Home
        }
      ]
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false
      }
    },

    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },

    {
      path: "/confirmar/:token",
      name: "confirmar-user",
      component: Confirmar,
      meta: {
        requiresAuth: false
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      console.log("Logged in!");
      if (to.meta.adminAuth) {
        const esAdmin = store.getters.isAdmin;
        console.log("esAdmin", esAdmin);
        if (esAdmin == "true") {
          next();
        } else {
          next("/");
        }
      } else {
        next();
      }
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
