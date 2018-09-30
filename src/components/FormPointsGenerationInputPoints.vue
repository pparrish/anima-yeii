<template>
  <div class="columns is-mobile is-variable is-1">
    <div class="column"><button 
      class="button is-warning"  
      @click="handleInput(value-10)">-10</button></div>
    <div class="column is-half">
      <input
        :value="value"
        type="number"
        class="input"
        @input="handleInput($event.target.value)">
    </div>
    <div class="column"><button 
      class="button is-info" 
      @click="handleInput(value+10)">+10</button></div>
  </div>
</template>
<script>
export default {
  name: "FormPointsGenerationInputPoints",
  props: {
    value: {
      type: Number,
      default: () => 60,
      required: true
    }
  },
  methods: {
    handleInput(value) {
      if (value < 0) value = 0;
      this.$emit("input", value);
    }
  }
};
</script>
