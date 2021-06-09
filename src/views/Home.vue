<template>
  <hello-world />
</template>

<script>
import { mapMutations } from "vuex";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },

  mounted() {
    this.active_route();
  },

  methods: {
    ...mapMutations(["active_route"]),
  },
};
</script>
