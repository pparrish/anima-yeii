<template>
    <div>
        <div class="content">
        <h2>Características del personaje.</h2>
            <p>Determinamos las capacidades básicas de <span class="is-capitalized">{{nameToShow}}</span>.</p>
        <h4>Gererar caracteristicas.</h4>
        <p>Existen 6 métodos de generacion de carácteristicas cada uno con diferentes resultados en la generacion de tu personaje. La mayoria incorporan el factor de la suerte, que añade un punto divertido en la creacion puesto que nadie puede ser exactamente como le gustaría.</p>
        </div>
        <div v-show="generation == 0">
            <p class="title is-5">Elige un metodo de generacion</p>
            <generation-cards v-for="(generationCard, index) in generationCards" :card="generationCard" @selected="(type) => generation = type"  :key="index"></generation-cards>
        </div>
    </div>
</template>

<script>
    import GenerationCards from "./GenerationCards"
export default {
  name: "characteristics-form",
  data: function() {
    return {
      generationCards: [
        {
          type: "1",
          title: "Al azar con ventaja.",
          tag: "recomendado",
          description: "Se te darán 8 números al azar del 4 al 10 con la seguridad de uno de ellos siempre será 9. "
        },
        {
          type: "2",
          title: "Al azar con riesgo.",
          tag: "Cifras bajas",
          description: "Se obtiene con 8 pares de números del 1 al 10 de los cuales se elije solo el mayor. Corres el riesgo de obtener vaores muy bajos."
        },
        {
          type: "3",
          title: "Completamente al azar.",
          tag: "Para NPC´s",
          description: "8 del 1 al 10, completamente al azar. Ideal para los personajes comunes y corrientes"
        },
        {
          type: "5",
          title: "Puntos al azar.",
          tag: "De 7 a 70",
          description: "Se obtiene de la suma de 7 números del 1 al 10 y después puedes repartir esos puntos como gustes. "
        },
        {
          type: "6",
          title: "Por puntos.",
          tag: "Libre",
          description: "Eliges la cantidad de puntos a repartir, por defecto son 60. Adicionalmente puedes elegir si ciertos valores cuestan más de un punto"
        },
      ],
      generation: 0
    };
  },
  computed: {
    nameToShow() {
      return this.$store.state.newCharacter.basicData.name;
    }
  },
  components: { GenerationCards },
  methods: {
  },
};
</script>

<style scoped>
</style>
