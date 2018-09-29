<template>
  <div>
    <p>AccordionSelector</p>
    <accordeon-selector-card 
      v-for="selector in selectors"
      :key="selector.id"
      :title="selector.title"
      :tags="selector.tags"
      :content="selector.content"
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
  props: {
    selectors: {
      type: Array,
      required: false,
      default: () => {
        return [
          {
            id: 1,
            title: "Prueba",
            tags: ["prueba", "pruebita"],
            content: "Esto es una prueba yeahh",
            buttonText: "Clica la prueba"
          },
          {
            id: 2,
            title: "Prueba",
            tags: ["prueba", "pruebita"],
            content: "Esto es una prueba yeahh",
            buttonText: "Clica la prueba"
          }
        ];
      }
    }
  },
  data() {
    return {
      selectorOpenend: undefined,
      selectCard: undefined
    };
  },
  methods: {
    toggleCards(id) {
      this.selectorOpenend = this.selectorOpenend !== id ? id : undefined;
    },
    selectedCard(id) {
      this.selectCard = id;
      this.toggleCards(id); //this close all cards
      this.$emit("input", this.selectCard);
    }
  }
};
</script>
