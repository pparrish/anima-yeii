<template>
    <div>
        <h2 class="title is-4 is-spaced">Características del personaje.</h2>
        <p class="subtitle">Dererminamos las capacidades básicas de {{nameToShow}}.</p>
        <h3 class="title is-5 is-spaced">Gererar caracteristicas.</h3>
        <p>Existen 5 métodos de generacion de carácteristicas cada uno con diferentes resultados en la generacion de tu personaje.</p>
        <h3 class="title is-6 is-spaced">Elije tu método de generacion.</h3>
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
