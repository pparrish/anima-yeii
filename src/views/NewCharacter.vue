<template>
  <div>

    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Creación de personajes</h1>
          <p class="subtitle"/>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">

        <progress-meter-step
          :steps="steps"
          :active="currentStep"/>

        <div class="content has-text-justified">
          <h2 class="title is-4">{{ steps[currentStep].title }}</h2>

          <p 
            v-if="currentStep === 0"
            class="is-size-6">Con esto {{ nameToShow }} podrá identificarse dentro del mundo.
          </p>

          <p 
            v-if="currentStep === 1"
            class="is-size-6">
            Después servirán para determinar el valor de cada una de las carácteristicas que va a tener {{ nameToShow
            }}.
            Existen diversas formas de generar generar estos puntos y debes elegir una de ellas.
          </p>
        </div>

        <form-basic-data 
          v-if="currentStep === 0"
          v-model="character.basicData"
          @finish="nexStep"/>

        <form-points-generation 
          v-if="currentStep === 1"
          v-model="character.initialPoints"
          :seed="seed"
          @back="prevStep"
          @finish="nexStep"/>

          <!-- <form-characteristics
          :characteristics="character.characteristics"
          v-if="currentStep === 2"
          @finish="nexStep" /> -->

      </div>
    </section>

  </div>
</template>

<script>
import ProgressMeterStep from "../components/ProgressMeterStep";
import FormBasicData from "../components/FormBasicData";
import FormCharacteristics from "../components/FormCharacteristics";
import FormPointsGeneration from "../components/FormPointsGeneration";

export default {
  name: "NewCharacter",
  components: {
    FormCharacteristics,
    FormBasicData,
    ProgressMeterStep,
    FormPointsGeneration
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        {
          title: "Datos básicos"
        },
        {
          title: "Generar puntos"
        },
        {
          title: "Características"
        }
      ],
      character: {
        basicData: {
          name: "",
          sex: "",
          age: NaN,
          race: "humano"
        },
        characteristics: {
          strength: 0,
          dexterity: 0,
          agility: 0,
          physique: 0,
          intelligence: 0,
          might: 0,
          will: 0,
          perception: 0
        },
        initialPoints: {
          type: "",
          values: [],
          total: 0
        }
      }
    };
  },
  computed: {
    nameToShow() {
      return this.character.basicData.name === ""
        ? "un personaje"
        : this.character.basicData.name;
    },
    seed() {
      return (
        "" +
        this.character.basicData.name +
        this.character.basicData.sex +
        this.character.basicData.age +
        this.character.basicData.race
      );
    }
  },
  methods: {
    nexStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    }
  }
};
</script>

<style scoped>
</style>
