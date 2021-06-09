<template>
  <v-app-bar class="app_bar" app color="white" flat dense>
    <div>
      <p class="mt-4 text-h5 grey--text text--darken-4 font-weight-medium">
        .rukkie<span class="deep-purple--text text--accent-4">()</span>
      </p>
    </div>
    <div class="d-flex ml-15">
      <router-link
        to="/"
        :class="{
          'deep-purple--text text--accent-4': current_path == '/',
        }"
        class="link mr-10 ml-15 font-weight-bold text-body-1"
        >.rukkie()</router-link
      >
      <router-link
        to="/work"
        :class="{
          'deep-purple--text text--accent-4': current_path == '/work',
        }"
        class="link mr-10 font-weight-bold text-body-1"
        >.work()</router-link
      >
      <router-link
        to="/about"
        :class="{
          'deep-purple--text text--accent-4': current_path == '/about',
        }"
        class="link mr-10 font-weight-bold text-body-1"
        >.about()</router-link
      >
      <router-link
        to="/contact"
        :class="{
          'deep-purple--text text--accent-4': current_path == '/contact',
        }"
        class="link mr-5 font-weight-bold text-body-1"
        >.contact()</router-link
      >
    </div>

    <v-spacer></v-spacer>

    <v-btn
      v-for="(buttons, index) in social_buttons"
      :key="index"
      depressed
      class="deep-purple accent-4 social_button py-4 ml-5"
      x-small
      :href="buttons.href"
    >
      <v-icon class="white--text">{{ buttons.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data: () => ({
    social_buttons: [
      {
        icon: "mdi-linkedin",
        href: 'https://www.linkedin.com/in/amagboro-terry-004830197/'
      },
      {
        icon: "mdi-github",
        href: 'https://github.com/rukkiecodes'
      },
      {
        icon: "mdi-facebook",
        href: 'https://web.facebook.com/Rukkiecodes/'
      },
    ],
  }),
  computed: {
    ...mapGetters(["routs"]),
    ...mapState(["current_path"]),
  },
};
</script>

<style scoped>
.app_bar {
  padding: 1em 5em !important;
}
.app_bar a {
  text-decoration: none;
  color: #455a64;
}

.app_bar .social_button {
  border-radius: 10px;
  width: 30px;
  height: 35px !important;
}

.app_bar .social_button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 8px 14px 1px #9b54ff;
}
</style>
