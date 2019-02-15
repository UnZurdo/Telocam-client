
<template>
  <div class="login">
    <v-container class="pa-5">
      <v-card class="pa-3">
        <v-card-title class="text-center">
          <v-container>
            <h1 class="heading grey--text">Register</h1>
          </v-container>
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="username" label="Username"></v-text-field>

            <v-text-field :type="'password'" v-model="password" label="Password"></v-text-field>
            <v-text-field :type="'password'" v-model="password_confirmation" label="Password"></v-text-field>

            <v-spacer></v-spacer>
            <p class="font-weight-light">¿Eres una empresa?, registrate
              <router-link to="/register/empresas">
                <a>aqui</a>
              </router-link>
              <v-spacer></v-spacer>

              <v-btn flat @click="register" class="success ml-4 mt-3 mb-5">Submit</v-btn>
            </p>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      password_confirmation: "",
      is_admin: null
    };
  },
  methods: {
    register: function() {
      let data = {
        email: this.email,
        password: this.password,
        username: this.username
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
