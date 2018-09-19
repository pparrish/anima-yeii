<template>
  <label class="field">
    <div class="label">Raza</div>
    <div class="control has-text-centered">
      <div class="select is-primary is-inline-block">
        <select 
          :value="value"
          @input="handleInput( $event.target.value )">
          <option disabled>Solo humano disponible por ahora.</option>
          <option disabled>-----------------------------------</option>
          <option 
            v-for="(race, index) in races"
            :value="race.value"
            :key="index">{{ race.name }}
          </option>
        </select>
      </div>
    </div>

  </label>
</template>

<script>
export default {
  name: "FormBasicDataFieldRace",
  props: {
    value: {
      type: String,
      default: () => "humano"
    }
  },
  data() {
    return {
      // TODO podemos implementar esto mejor,creo
      races: [{ name: "Humano", value: "humano" }]
    };
  },
  methods: {
    handleInput(race) {
      this.$emit("input", race);
    }
  }
};
</script>

<style scoped>
</style>
