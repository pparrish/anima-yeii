<template>
  <div class="field">
    <label class="label">Sexo.</label>
    <div class="buttons has-addons control">
      <button class="button">Hombre.</button>
      <button class="button">Mujer.</button>
    </div>
    <p class="help is-danger buttons-help">Debes elegir el sexo de tu personaje.</p>
  </div>
</template>

<script>
export default {
  name: "FormBasicDataFieldSex",
  props: {
    error: {
      type: Boolean,
      default: () => false
    },
    sex: {
      type: String
    }
  }
};
</script>

<style scoped>
.buttons-help {
  margin-top: -1.2rem;
}
</style>
