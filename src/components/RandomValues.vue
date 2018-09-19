<template>
  <div class="field is-grouped is-grouped-multiline">
    <div 
      v-for="(value, index) in result" 
      :key="index" 
      class="control">
      <div class="tags has-addons">
        <span class="tag is-warning"><i class="fa fa-dice"/>{{ label }}</span>
        <span class="tag is-info">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomValues",
  props: {
    result: {
      type: Array,
      required: false,
      default: () => []
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.tag {
  min-width: 3em;
}
.control:last-child {
  margin-right: 0.75rem;
}
</style>
