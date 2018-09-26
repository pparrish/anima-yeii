<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        <p>{{ title }} 
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="tag">{{ tag }}</span></p>
      </div>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fas fa-angle-down"/>
        </span>
      </a>
    </div>
    <div class="card-content has-justified-text">
      <p>{{ content }}</p>
    </div>
    <div class="card-footer">
      <a 
        class="card-footer-item button is-link is-radiusless"
        @click="$emmit('selected') ">{{ buttonText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordeonSelectorCard",
  props: {
    title: {
      type: String,
      default: () => "No title",
      required: false
    },
    tags: {
      type: Array,
      default: () => [],
      required: false
    },
    content: {
      type: String,
      default: () => "No content",
      required: false
    },
    buttonText: {
      type: String,
      default: () => "No text",
      required: false
    }
  }
};
</script>
