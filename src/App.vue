<template>
  <v-app>
    <Nav />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Navbar.vue"
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    Nav
  }
};
</script>

<style>
*{
  font-family: 'victor mono';
}
</style>