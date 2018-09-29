<template>
  <div class="card">
    <div
      :class="{'has-background-success': isSelected}"
      class="card-header">
      <div
        :class="{'has-text-white': isSelected}" 
        class="card-header-title ">
        <p>{{ title }}
          <span
            v-for="(tag, index) in tags"
            :key="index">&nbsp;<span class="tag">{{ tag }}</span></span></p>
      </div>
      <a 
        class="card-header-icon"
        @click="handleToggle">
        <span class="icon">
          <i class="fas fa-angle-down"/>
        </span>
      </a>
    </div>
    <div 
      v-show="isOpen"
      class="card-content has-justified-text">
      <p>{{ content }}</p>
    </div>
    <div
      v-show="isOpen"
      class="card-footer">
      <a 
        class="card-footer-item button is-link is-radiusless"
        @click="handleClick">{{ buttonText }}</a>
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
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: () => false
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: () => false
    }
  },
  methods: {
    handleClick() {
      this.$emit("selected");
    },
    handleToggle() {
      this.$emit("toggled");
    }
  }
};
</script>
