<template>
    <div class="section">
        <div class="container">
            <h1 class="title is-3">Creación de personajes.</h1>
            <div class="box has-background-black">

                <ul class="steps is-balanced has-content-centered is-small">
                    <li class="steps-segment" :class="{'is-active': step === 1, 'has-text-white': step === 1 }">
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">Datos básicos</p>
                        </div>
                    </li>
                    <li class="steps-segment" :class="{'is-active': step === 2, 'has-text-white': step === 2 }">
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">Características</p>
                        </div>
                    </li>
                    <li class="steps-segment" :class="{'is-active': step === 3, 'has-text-white': step === 3 }" >
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">Categorias</p>
                        </div>
                    </li>
                    <li class="steps-segment" :class="{'is-active': step === 4, 'has-text-white': step === 4 }">
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">Puntos de creación</p>
                        </div>
                    </li>
                    <li class="steps-segment" :class="{'is-active': step === 5, 'has-text-white': step === 5 }">
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">Puntos de desarrollo</p>
                        </div>
                    </li>
                    <li class="steps-segment" :class="{'is-active': step === 6, 'has-text-white': step === 6 }">
                        <span class="steps-marker"></span>
                        <div class="steps-content">
                            <p class="is-size-6">fin</p>
                        </div>
                    </li>
                </ul>

            </div>

            <basic-data-form  @submit="changeStep" v-show="step === 1"></basic-data-form>
            <characteristics-form v-show="step === 2"></characteristics-form>

        </div>

    </div>

</template>

<script>
import BasicDataForm from "../components/BasicDataForm";
import CharacteristicsForm from "../components/CharacteristicsForm";
export default {
  name: "CharacterDetails",
  components: { CharacteristicsForm, BasicDataForm },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    changeStep() {
      this.step++;
    }
  }
};
</script>

<style scoped>
</style>
