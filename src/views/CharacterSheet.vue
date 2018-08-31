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
            <basic-data-form class="container" @submit="changeStep" v-show="step === 1"></basic-data-form>
        </section>




    </div>

</template>

<script>
import BasicDataForm from "../components/BasicDataForm";
export default {
  name: "CharacterDetails",
  components: { BasicDataForm },
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
