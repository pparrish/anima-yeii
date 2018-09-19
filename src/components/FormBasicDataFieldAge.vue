<template>
  <label class="field">
    <div class="label">Edad.</div>
    <div class="control has-text-centered">
      <input 
        :value="value"
        type="number"
        class="input is-inline-block"
        min="1"
        placeholder="???"
        @input="handleInput($event.target.value)">
    </div>
    <p 
      v-show="Number.isNaN(value) "
      class="help is-warning">Deja en blanco para indicar que se desconoce la edad del personaje.</p>
  </label>
</template>

<script>
export default {
  name: "FormBasicDataFieldAge",
  props: {
    value: {
      type: Number,
      default: NaN
    }
  },
  methods: {
    handleInput(age) {
      this.$emit("input", parseInt(age));
    }
  }
};
</script>

<style scoped>
input[type="number"] {
  width: 5rem;
}
</style>
