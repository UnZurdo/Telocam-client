<template>
  <div class="login">
    <v-container fluid class="mt-5">
      <v-layout row>
        <v-flex xs0 sm2 md4 flat></v-flex>

        <v-flex xs12 sm8 md6 flat>
          <v-card class>
            <v-card-title class="text-center">
              <v-container>
                <h1 class="heading grey--text">Log In</h1>
              </v-container>
            </v-card-title>

            <v-card-text>
              <v-form class="px-3" ref="form">
                <v-text-field v-model="email" label="Email" :rules="inputRules"></v-text-field>
                <v-text-field
                  :type="'password'"
                  v-model="password"
                  label="Password"
                  :rules="inputRules"
                ></v-text-field>
                <p class="font-weight-light">¿No tienes una cuenta? Registrate
                  <router-link to="/register">
                    <a>aqui</a>
                  </router-link>
                </p>

                <v-spacer></v-spacer>

                <v-btn depressed @click="login" class="ml-2 mt-3 mb-5" :loading="loading">Submit</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs0 sm2 md4 flat></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      inputRules: [
        v => !!v || "This field is required",
        v => v.length >= 3 || "Minimum length is 3 characters"
      ],
      loading: false,
      dialog: false
    };
  },
  methods: {
    login: function() {
      let data = {
        email: this.email,
        password: this.password
      };
      console.log(data);
      this.$store
        .dispatch("login", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>