<template>
  <div>

    <form-points-generation-selector
      v-model="selectedGenerationType"
      class="box is-paddingless"/>

    <form-points-generation-generator
      v-if="selectedGenerationType && selectedGenerationType !== 'POINTS'"
      :seed="seed + selectedGenerationType"
      :method="selectedGenerationType"
      @values-generated="handleValuesGenerated"/>

    <div
      v-if="selectedGenerationType && selectedGenerationType !== 'POINTS'"
      class="box">

      <group-dices
        :result="valuesGenerated"
        label="D10"/>

      <p><strong>Total:</strong> {{ totalPoints }}</p>

    </div>

    <div 
      v-if="selectedGenerationType === 'POINTS'"
      class="box">

      <form-points-generation-input-points v-model.number="totalPoints" />

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
  data() {
    return {
      selectedGenerationType: undefined,
      valuesGenerated: [],
      totalPoints: 60
    };
  },
  watch: {
    value() {
      this.selectedGenerationType = this.value.type;
      this.selectedGenerationType = this.value.selectedType;
      this.totalPoints = this.value.total;
    },
    selectedGenerationType() {
      this.valuesGenerated = [];
      this.totalPoints = this.selectedGenerationType === "POINTS" ? 60 : 0;
    }
  },
  methods: {
    handleValuesGenerated(values) {
      this.valuesGenerated = values;
      this.totalPoints = values.reduce((prev, curr) => prev + curr, 0);
    },
    handleFinish() {
      this.$emit("input", {
        types: this.selectedGenerationType,
        values: this.valuesGenerated,
        total: this.totalPoints
      });
      this.$emit("finish");
    }
  }
};
</script>

<style scoped>
</style>
