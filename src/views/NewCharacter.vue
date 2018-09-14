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

        <h2 class="title is-2">{{steps[currentStep].title}}</h2>
        <p class="subtitle is-4">Fundamentales para la identidad {{ nameToShow }}.</p>

        <form-basic-data v-model="character.basicData"
                         @finish="nexStep"></form-basic-data>

      </div>
    </section>

  </div>
</template>

<script>
import ProgressMeterStep from "../components/ProgressMeterStep";
import FormBasicData from "../components/FormBasicData";

export default {
  name: "NewCharacter",
  components: { FormBasicData, ProgressMeterStep },
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
        }
      },
      nameToShow: "del personaje"
    };
  },
  methods: {
    nexStep() {
      this.currentStep++;
    }
  }
};
</script>

<style scoped>
</style>
