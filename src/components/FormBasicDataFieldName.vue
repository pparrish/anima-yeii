<template>
  <label class="field block">
    <div class="label">Nombre(s).</div>
    <div class="control">
      <input
        ref="input"
        :value="value"
        type="text"
        class="input"
        placeholder="Loremín"
        required
        @input="handleInput($event.target.value)">
    </div>
    <p 
      v-for="(error, index) in info.errors"
      :key="index"
      class="help is-danger">{{ error.message }}.</p>
  </label>
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
    handleInput(name) {
      let formatedName = name;
      formatedName = this.cleanSpaces(formatedName);
      formatedName = this.capitalizeWords(formatedName);
      formatedName = formatedName === " " ? "" : formatedName;
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
      if (this.info[type].findIndex(aInfo => aInfo.name === name) === -1)
        this.info[type].push({ name: name, message: message });
    },
    clearInfo(type, name) {
      let index = this.info[type].findIndex(aInfo => aInfo.name === name);
      if (index !== -1) this.info[type].splice(index, 1);
    },
    capitalizeWords(name) {
      return name.replace(/\b(\w)/g, c => c.toUpperCase());
    },
    cleanSpaces(name) {
      return name.replace(/\s+/g, () => " ").replace(/^\s/, () => "");
    }
  }
};
</script>

<style scoped>
</style>
