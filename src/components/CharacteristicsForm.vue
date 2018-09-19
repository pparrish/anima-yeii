<template>
  <div>
    <div class="content">

      <div v-show="generation === '' ">
        <p class="title is-5">Elige un metodo de generacion</p>
        <generation-cards 
          v-for="(generationCard, index) in generationCards" 
          :card="generationCard" 
          :key="index" 
          :ref="'generationCards'" 
          @selected="setGenetationType" 
          @toggled="closeGenerationCards"/>
      </div>

      <div 
        v-if="generation !== '' " 
        class="card has-background-light">
        <div 
          v-if="generation !== 'POINTS' " 
          class="card-header">
          <p class="card-header-title">
            Resultados.
          </p>
        </div>
        <div 
          v-if="generation !== 'POINTS' " 
          class="card-content has-background-white ">
          <random-values 
            :result="generators[generation].values" 
            label="D10"/>
          <div 
            v-if="generation === 'POINTS_RANDOM' " 
            class="message is-info">
            <div class="message-body">
              Total: {{ generators['POINTS_RANDOM'].values.reduce( (a,acum ) => a+acum ,0) }}
            </div>
          </div>
        </div>
        <div 
          v-else 
          class="card-content has-background-white ">
          <div class="field">
            <label class="label">Cantidad de puntos.</label>
            <div class="control ">
              <input 
                v-model.number="generators['POINTS'].values[0]" 
                type="number" 
                class="input is-small" 
                min="1"
                placeholder="???">
            </div>
          </div>
        </div>
        <footer class="card-footer ">
          <a 
            class="card-footer-item button is-link is-radiusless" 
            @click=" generation = '' ">
            Escoger Otro método
          </a>
          <a 
            class="card-footer-item button is-success is-radiusless " 
            @click="generationIsSelected">
            Continuar.
          </a>
        </footer>
      </div>
    </div>

    <pre>
{{ characteristicsPoints }}
    </pre>

  </div>
</template>

<script>
import GenerationCards from "./GenerationCards";
import RandomValues from "./RandomValues";
export default {
  name: "CharacteristicsForm",
  components: { GenerationCards, RandomValues },
  data: function() {
    return {
      generationCards: [
        {
          type: "ADVANTAGE",
          title: "Al azar con ventaja.",
          tag: "recomendado",
          description:
            "Se te darán 8 números al azar del 4 al 10 con la seguridad de uno de ellos siempre será 9. "
        },
        {
          type: "RISK",
          title: "Al azar con riesgo.",
          tag: "Cifras bajas",
          description:
            "Se obtiene con 8 pares de números del 1 al 10 de los cuales se elije solo el mayor. Corres el riesgo de obtener vaores muy bajos."
        },
        {
          type: "RANDOM",
          title: "Completamente al azar.",
          tag: "Para NPC´s",
          description:
            "8 números del 1 al 10, completamente al azar. Ideal para los personajes comunes y corrientes"
        },
        {
          type: "POINTS_RANDOM",
          title: "Puntos al azar.",
          tag: "De 7 a 70",
          description:
            "Se obtiene de la suma de 7 números del 1 al 10 y después puedes repartir esos puntos como gustes. "
        },
        {
          type: "POINTS",
          title: "Por puntos.",
          tag: "Libre",
          description:
            "Eliges la cantidad de puntos a repartir, por defecto son 60."
        }
      ],
      generation: "",
      generators: {
        ADVANTAGE: {
          values: [],
          generator() {
            if (this.values.length !== 8) {
              let values = new Array(8)
                .fill()
                .map(() => Math.floor(Math.random() * (11 - 4)) + 4);
              let minValue = Math.min.apply(null, values);
              let minValueIndex = values.indexOf(minValue);
              values[minValueIndex] = 9;
              this.values = values;
            }
          }
        },
        RISK: {
          values: [],
          generator() {
            if (this.values.length !== 8) {
              this.values = new Array(8).fill().map(() => {
                let firstDice = Math.floor(Math.random() * 10) + 1;
                let secondDice = Math.floor(Math.random() * 10) + 1;
                return Math.max(firstDice, secondDice);
              });
            }
          }
        },
        RANDOM: {
          values: [],
          generator() {
            if (this.values.length !== 8) {
              this.values = new Array(8)
                .fill()
                .map(() => Math.floor(Math.random() * 10) + 1);
            }
          }
        },
        POINTS_RANDOM: {
          values: [],
          generator() {
            if (this.values.length !== 7) {
              this.values = new Array(7)
                .fill()
                .map(() => Math.floor(Math.random() * 10) + 1);
            }
          }
        },
        POINTS: {
          values: [60],
          generator() {
            return 0;
          }
        }
      },
      characteristicsPoints: {
        type: "",
        pointsToDistribute: []
      }
    };
  },
  computed: {
    nameToShow() {
      return this.$store.state.newCharacter.basicData.name;
    }
  },
  methods: {
    setGenetationType(type) {
      this.generation = type;
      if (this.generation !== "") this.generators[this.generation].generator();
    },
    closeGenerationCards(type) {
      this.$refs.generationCards.map(generationCard => {
        if (generationCard.card.type !== type) generationCard.isOpen = false;
      });
    },
    generationIsSelected() {
      // TODO Distribute better, and fix the blink to generation value
      if (this.generators[this.generation].values.length === 1) {
        this.characteristicsPoints = {
          type: "points",
          pointsToDistribute: [this.generators[this.generation].values]
        };
      }
      if (this.generators[this.generation].values.length === 7) {
        this.characteristicsPoints = {
          type: "points",
          pointsToDistribute: [
            this.generators[this.generation].value.reduce(
              (a, acum) => a + acum,
              0
            )
          ]
        };
      }
      if (this.generators[this.generation].values.length === 8) {
        this.characteristicsPoints = {
          type: "values",
          pointsToDistribute: this.generators[this.generation].values.sort(
            (a, b) => a < b
          )
        };
      }
    }
  }
};
</script>

<style scoped>
.has-margin-vertical {
  margin-top: 0.5em !important;
  margin-bottom: 0.5em !important;
}
.card-footer-item:not(:last-child) {
  border: none;
}
</style>
