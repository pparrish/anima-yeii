<template>
  <form @submit.prevent="$emit('finish')">

    <form-basic-data-field-name v-model="value.name"/>
    <!-- TODO handle to error -->
    <form-basic-data-field-sex v-model="value.sex"/>

    <form-basic-data-field-age v-model="value.age"/>

    <form-basic-data-field-race v-model="value.race"/>

    <div class="field">
      <div class="control">
        <input 
          type="submit"
          class="button is-pulled-right is-link"
          value="siguiente Paso!">
      </div>
    </div>

  </form>
</template>

<script>
import FormBasicDataFieldName from "./FormBasicDataFieldName";
import FormBasicDataFieldSex from "./FormBasicDataFieldSex";
import FormBasicDataFieldAge from "./FormBasicDataFieldAge";
import FormBasicDataFieldRace from "./FormBasicDataFieldRace";

export default {
  name: "FormBasicData",
  components: {
    FormBasicDataFieldRace,
    FormBasicDataFieldAge,
    FormBasicDataFieldSex,
    FormBasicDataFieldName
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          name: "",
          sex: "",
          age: NaN,
          race: "humano"
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
label {
  display: block;
}
</style>
