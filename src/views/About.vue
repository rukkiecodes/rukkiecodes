<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  mounted() {
    this.active_route();
  },

  methods: {
    ...mapMutations(["active_route"]),
  },
};
</script>
