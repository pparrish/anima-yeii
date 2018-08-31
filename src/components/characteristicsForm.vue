<template>
    <div>
    <h2 class="title is-5">Características del personaje.</h2>
    <p class="subtitle">Dererminamos las capacidades básicas de {{nameToShow}}.</p>
    </div>
</template>

<script>
export default {
  name: "characteristics-form",
  data: function() {
    return {};
  },
  computed: {
    nameToShow() {
      return this.$store.state.newCharacter.basicData.name;
    }
  }
};
</script>

<style scoped>
</style>
