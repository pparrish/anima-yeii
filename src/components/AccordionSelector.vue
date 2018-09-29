<template>
  <div>
    <accordeon-selector-card 
      v-for="selector in selectors"
      :key="selector.id"
      :title="selector.title"
      :tags="selector.tags"
      :content="selector.description"
      :button-text="selector.buttonText"
      :is-open="selectorOpenend === selector.id"
      :is-selected="selectCard === selector.id"
      @toggled="toggleCards(selector.id)"
      @selected="selectedCard(selector.id)" />
  </div>
</template>

<script>
import AccordeonSelectorCard from "@/components/AccordionSelectorCard";

export default {
  name: "AccordeonSelector",
  components: { AccordeonSelectorCard },
  model: {
    prop: "selectCard",
    event: "input"
  },
  props: {
    selectors: {
      type: Array,
      required: false,
      default: () => []
    },
    selectCard: {
      type: String,
      required: false,
      default: () => undefined
    }
  },
  data() {
    return {
      selectorOpenend: undefined
    };
  },
  methods: {
    toggleCards(id) {
      this.selectorOpenend = this.selectorOpenend !== id ? id : undefined;
    },
    selectedCard(id) {
      this.toggleCards(id); //this close all cards
      this.$emit("input", id);
    }
  }
};
</script>
