<template>
  <div>

    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">Creación de personajes</h1>
          <p class="subtitle"></p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <progress-meter-step
            :steps="steps"
            :active="currentStep"></progress-meter-step>
        <div class="content has-text-justified">
          <h2 class="title is-4">{{steps[currentStep].title}}</h2>

          <p class="is-size-6"
             v-if="currentStep === 0">Con esto {{nameToShow}} podrá identificarse dentro del mundo.
          </p>

          <p class="is-size-6"
             v-if="currentStep === 1">
            Después servirán para determinar el valor de cada una de las carácteristicas que va a tener {{nameToShow}}.
            Existen diversas formas de generar generar estos puntos y debes elegir una de ellas.
          </p>
        </div>

        <form-basic-data v-model="character.basicData"
                         @finish="nexStep"
                         v-if="currentStep === 0"></form-basic-data>

        <hr>
        <hr>
        <hr>
        <hr>

        <characteristics-form></characteristics-form>

      </div>
    </section>

  </div>
</template>

<script>
import ProgressMeterStep from "../components/ProgressMeterStep";
import FormBasicData from "../components/FormBasicData";
import CharacteristicsForm from "../components/CharacteristicsForm";

export default {
  name: "NewCharacter",
  components: { CharacteristicsForm, FormBasicData, ProgressMeterStep },
  data() {
    return {
      currentStep: 1,
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
        }
      }
    };
  },
  methods: {
    nexStep() {
      this.currentStep++;
    }
  },
  computed: {
    nameToShow() {
      return this.character.basicData.name === ""
        ? "un personaje"
        : this.character.basicData.name;
    }
  }
};
</script>

<style scoped>
</style>
