<template>
  <div>

    <form-points-generation-selector
      :value="value.type"
      class="box is-paddingless"
      @input="handleSelection"/>

    <form-points-generation-generator
      v-if="value.type && value.type !== 'POINTS'"
      :seed="seed + value.type"
      :method="value.type"
      :value="value.values"
      @input="handleValuesGenerated"/>

    <div
      v-if="value.type && value.type !== 'POINTS'"
      class="box">

      <group-dices
        :result="value.values"
        label="D10"/>

      <p><strong>Total:</strong> {{ value.total }}</p>

    </div>

    <div 
      v-if="value.type === 'POINTS'"
      class="box">

      <form-points-generation-input-points
        :value="value.total"
        @input="handlePoints" />

    </div>

    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <button
            class="button is-pulled-right is-warning"
            @click="$emit('back')">Atras</button>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-pulled-right is-link"
            @click="handleFinish">Siguiente paso!</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import FormPointsGenerationSelector from "@/components/FormPointsGenerationSelector";
import FormPointsGenerationGenerator from "@/components/FormPointsGenerationGenerator";
import FormPointsGenerationInputPoints from "./FormPointsGenerationInputPoints";
import GroupDices from "./GroupDices";
export default {
  name: "FormPointsGeneration",
  components: {
    FormPointsGenerationSelector,
    FormPointsGenerationGenerator,
    FormPointsGenerationInputPoints,
    GroupDices
  },
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
  methods: {
    handleSelection(id) {
      this.$emit("input", {
        type: id,
        values: [],
        total: id === "POINTS" ? 60 : 0
      });
    },
    handlePoints(value) {
      this.$emit("input", {
        type: this.value.type,
        values: [],
        total: value
      });
    },
    handleValuesGenerated(values) {
      this.$emit("input", {
        type: this.value.type,
        values: values,
        total: values.reduce((prev, curr) => prev + curr, 0)
      });
    },
    handleFinish() {
      this.$emit("finish");
    }
  }
};
</script>

<style scoped>
</style>
