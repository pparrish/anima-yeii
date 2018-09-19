<template>
  <div class="card">
    <header class="card-header has-background-light">
      <div class="card-header-title ">
        <p>{{ card.title }} <span class="tag is-info is-size-8">{{ card.tag }}</span></p>
      </div>
      <a 
        class="card-header-icon" 
        @click.prevent="toggleOpen" >
        <span class="icon"><i 
          :class="{'fa-rotate-180': isOpen }" 
          class="fas fa-angle-down" 
          aria-hidden="true"/></span>
      </a>
    </header>
    <div 
      v-show="isOpen" 
      class="card-content has-text-justified">
      <p>
        {{ card.description }}
      </p>
    </div>
    <footer 
      v-show="isOpen" 
      class="card-footer">
      <a 
        class="card-footer-item button is-link is-radiusless" 
        @click.prevent="$emit('selected', card.type)">Usar este método de generación.</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GenerationCards",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
      this.$emit("toggled", this.card.type);
    }
  }
};
</script>

<style scoped>
.is-size-8 {
  font-size: 0.5rem;
}
</style>
