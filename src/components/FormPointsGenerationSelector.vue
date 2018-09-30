<template>
  <div>
    <accordion-selector 
      :selectors="generationCards"
      :select-card="value"
      @input="handleSelection"/>
  </div>
</template>

<script>
import AccordionSelector from "@/components/AccordionSelector";

export default {
  name: "FormPointsGenerationSelector",
  components: { AccordionSelector },
  props: {
    value: {
      type: String,
      required: false,
      default: () => undefined
    }
  },
  data() {
    return {
      generationCards: [
        {
          id: "ADVANTAGE",
          title: "Al azar con ventaja.",
          tags: ["recomendado"],
          buttonText: "Selecciona este método",
          description:
            "Se te darán 8 números al azar del 4 al 10 con la seguridad de uno de ellos siempre será 9. "
        },
        {
          id: "RISK",
          title: "Al azar con riesgo.",
          tags: ["Cifras bajas"],
          buttonText: "Selecciona este método",
          description:
            "Se obtiene con 8 pares de números del 1 al 10 de los cuales se elije solo el mayor. Corres el riesgo de obtener vaores muy bajos."
        },
        {
          id: "RANDOM",
          title: "Completamente al azar.",
          tags: ["Para NPC´s"],
          buttonText: "Selecciona este método",
          description:
            "8 números del 1 al 10, completamente al azar. Ideal para los personajes comunes y corrientes"
        },
        {
          id: "POINTS_RANDOM",
          title: "Puntos al azar.",
          buttonText: "Selecciona este método",
          tags: ["De 7 a 70"],
          description:
            "Se obtiene de la suma de 7 números del 1 al 10 y después puedes repartir esos puntos como gustes. "
        },
        {
          id: "POINTS",
          title: "Por puntos.",
          tags: ["Libre"],
          buttonText: "Selecciona este método",
          description:
            "Eliges la cantidad de puntos a repartir, por defecto son 60."
        }
      ]
    };
  },
  methods: {
    handleSelection(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
</style>
