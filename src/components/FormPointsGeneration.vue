<template>
  <div>
    <p>FormPointsGeneration</p>
    <form-points-generation-selector/>
  </div>
</template>

<script>
import FormPointsGenerationSelector from "@/components/FormPointsGenerationSelector";
export default {
  name: "FormPointsGeneration",
  components: { FormPointsGenerationSelector },
  props: {
    points: {
      type: Object,
      default: () => {
        return {
          type: "",
          values: [],
          total: 0
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
