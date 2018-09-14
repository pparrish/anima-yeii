<template>
  <label class="field">
    <div class="label">Edad.</div>
    <div class="control has-text-centered">
      <input type="number"
             class="input is-inline-block"
             min="1"
             placeholder="???"
             :value="value"
             @input="handleInput($event.target.value)"/>
    </div>
    <p class="help is-warning"
       v-show="Number.isNaN(value) ">Deja en blanco para indicar que se desconoce la edad del personaje.</p>
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
</style>
