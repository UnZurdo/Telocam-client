<template>
  <v-footer dark height="auto">
    <v-layout class="teal darken-4" justify-center row wrap>
      <v-flex class="teal justify-center" darken-3 py-3 text-xs-center white--text xs12>
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-flex>

      <v-btn v-for="link in links" :key="link" color="white" flat round>{{ link }}</v-btn>

      <v-flex
        class="grey darken-4 justify-center mt-3"
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 —
        <strong>Portal Estudiantes Unizar</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
import "font-awesome/css/font-awesome.css";

export default {
  data() {
    return {
      links: ["about", "contact us", "privacy", "terms", "cookies"],
      icons: [
        "fa fa-twitter",
        "fa fa-facebook",
        "fa fa-linkedin",
        "fa fa-instagram"
      ]
    };
  }
};
</script>

<style>
</style>
