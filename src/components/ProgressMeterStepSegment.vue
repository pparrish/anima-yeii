<template>
  <li class="steps-segment">
    <div class="steps-marker">{{ marker }}</div>
    <div class="steps-content">
      <p class="has-text-weight-bold is-size-5"> {{ title }}</p>
      <p class="is-size-7">{{ text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProgressMeterStepSegment",
  props: {
    text: {
      type: String,
      default() {
        return "";
      },
      required: false
    },
    title: {
      type: String,
      default() {
        return "";
      },
      required: false
    },
    marker: {
      type: String,
      default() {
        return "";
      },
      required: false
    },
    isDividerContent: {
      type: Boolean,
      default() {
        return false;
      },
      required: false
    }
  }
};
</script>

<style scoped>
</style>
