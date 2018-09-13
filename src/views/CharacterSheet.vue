<template>
    <div class="section">
        <div class="container">
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
