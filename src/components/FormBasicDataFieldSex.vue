<template>
  <label class="field">
    <div class="label">Sexo.</div>
    <div class="control">
      <div class="buttons has-addons is-centered">
        <button
            class="button is-medium"
            :class="{'is-success' : value === 'hombre' }"
            @click.prevent="sexSelected('hombre')">Hombre.
        </button>
        <button
            class="button is-medium"
            :class="{'is-success' : value === 'mujer' }"
            @click.prevent="sexSelected('mujer')">Mujer.
        </button>
      </div>
    </div>
    <p class="help is-danger">Debes elegir el sexo de tu personaje.</p>
  </label>
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
      type: String
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
