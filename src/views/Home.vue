<template>
  <Intro />
</template>

<script>
import { mapMutations } from "vuex";
import Intro from "../components/Intro";

export default {
  name: "Home",

  components: {
    Intro,
  },

  mounted() {
    this.active_route();
  },

  methods: {
    ...mapMutations(["active_route"]),
  },
};
</script>
