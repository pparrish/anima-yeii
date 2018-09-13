<template>
  <div class="field"
       @click="focusInput()">
    <label class="label">Nombre(s).</label>
    <div class="control">
      <input
          @input="handleInput($event.target.value)"
          :value="value"
          ref="input"
          type="text"
          class="input"
          placeholder="Loremín"
          required>
    </div>
    <p class="help is-danger"
       v-for="(error, index) in info.errors"
       :key="index">{{ error.message }}.</p>
  </div>
</template>

<script>
export default {
  name: "FormBasicDataFieldName",
  props: {
    value: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      info: {
        errors: []
      },
      edited: false
    };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
    handleInput(name) {
      let formatedName = this.capitalizeWords(name);

      if (formatedName === "") {
        this.setInfo("errors", "NAME_EMPTY", "El nombre no puede quedar vacio");
      } else {
        this.clearInfo("errors", "NAME_EMPTY");
      }
      if (this.info.errors.length !== 0) this.$emit("error", true);
      else this.$emit("error", false);
      this.$emit("input", formatedName);
    },
    setInfo(type, name, message) {
      this.info[type].push({ name: name, message: message });
    },
    clearInfo(type, name) {
      let index = this.info[type].findIndex(aInfo => aInfo.name === name);
      if (index !== -1) this.info[type].splice(index, 1);
    },
    capitalizeWords(name) {
      return name.replace(/\b(\w)/g, c => c.toUpperCase());
    }
  }
};
</script>

<style scoped>
</style>
