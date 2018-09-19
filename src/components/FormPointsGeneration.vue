<template>
    <div>
        
    </div>
</template>

<script>
export default {
  name: "FormPointsGeneration",
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
