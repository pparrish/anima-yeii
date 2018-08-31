<template>
    <div class="container">

        <section class="section">
            <div class="container">
                <h1 class="title is-4">
                    Creación de personajes.
                </h1>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <basic-data-form  @submit="changeStep" v-show="step === 1"></basic-data-form>
                <characteristics-form ></characteristics-form>
            </div>
        </section>




    </div>

</template>

<script>
import BasicDataForm from "../components/BasicDataForm";
import CharacteristicsForm from "../components/characteristicsForm";
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
