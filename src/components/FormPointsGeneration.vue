<template>
  <div>
    <p>FormPointsGeneration</p>
    <form-points-generation-selector
      v-model="selectedGenerationType"/>
    <from-points-generation-generator
      v-if="selectedGenerationType !== 'POINTS'"
      :seed="seed"
      :method="selectedGenerationType"
      @values-generated="handleValuesGenerated"/>
  </div>
</template>

<script>
import FormPointsGenerationSelector from "@/components/FormPointsGenerationSelector";
import FromPointsGenerationGenerator from "@/components/FromPointsGenerationGenerator";
export default {
  name: "FormPointsGeneration",
  components: { FormPointsGenerationSelector, FromPointsGenerationGenerator },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          type: "",
          values: [],
          total: 0
        };
      }
    },
    seed: {
      type: String,
      required: true,
      default: () => "NaNhumano"
    }
  },
  data() {
    return {
      selectedGenerationType: undefined,
      valuesGenerated: []
    };
  },
  watch: {
    value() {
      this.selectedGenerationType = this.value.selectedType;
    },
    selectedType(type) {
      this.$emit("input", type);
    }
  },
  methods: {
    handleValuesGenerated(values) {
      this.test = values;
    }
  }
};
</script>

<style scoped>
</style>
