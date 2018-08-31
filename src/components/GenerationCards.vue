<template>
    <div class="card">
        <header class="card-header is-info">
            <div class="card-header-title ">
                <p>{{card.type}} . {{card.title}} <span class="tag is-info is-size-8">{{card.tag}}</span></p>
            </div>
            <a class="card-header-icon" @click.prevent="toggleOpen" >
                <span class="icon"><i class="fas fa-angle-down" :class="{'fa-rotate-180': isOpen }" aria-hidden="true"></i></span>
            </a>
        </header>
        <div class="card-content has-text-justified" v-show="isOpen">
            <p>
                {{card.description}}
            </p>
        </div>
        <footer class="card-footer" v-show="isOpen">
            <a class="card-footer-item" @click.prevent="$emit('selected', card.type)">Usar este método de generación.</a>
        </footer>
    </div>
</template>

<script>
export default {
  name: "generation-cards",
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
    }
  }
};
</script>

<style scoped>
.is-size-8 {
  font-size: 0.5rem;
}
</style>
