<template>
  <div class="field">
    <div class="label">Sexo.</div>
    <div class="control">
      <div class="buttons has-addons is-centered">
        <button
          :class="{'is-success' : value === 'hombre' }"
          class="button is-medium"
          @click.prevent="sexSelected('hombre')">Hombre.
        </button>
        <button
          :class="{'is-success' : value === 'mujer' }"
          class="button is-medium"
          @click.prevent="sexSelected('mujer')">Mujer.
        </button>
      </div>
    </div>
    <p 
      v-if="error"
      class="help is-danger">Debes elegir el sexo de tu personaje.</p>
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
    value: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    sexSelected(sex) {
      this.$emit("input", sex);
    }
  }
};
</script>

<style scoped>
.buttons-help {
  margin-top: -1.2rem;
}
</style>
