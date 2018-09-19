<template>
  <ul class="steps">
    <progress-meter-step-segment
        v-for="(step, index) in steps"
        :key="index"
        :text="step.text"
        :title="step.title"
        :marker="parseInt(index) + 1  + '' "
        :class="{'is-active': index === active}"></progress-meter-step-segment>
  </ul>
</template>

<script>
import ProgressMeterStepSegment from "./ProgressMeterStepSegment";

export default {
  name: "ProgressMeterStep",
  components: { ProgressMeterStepSegment },
  props: {
    steps: {
      type: Array,
      default() {
        return [];
      },
      required: true
    },
    active: {
      type: Number,
      default() {
        return 0;
      },
      required: false
    }
  }
};
</script>

<style lang="scss"
       scoped>
</style>
