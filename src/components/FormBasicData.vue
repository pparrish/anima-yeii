<template>
  <form @submit.prevent="$emit('finish')">

    <form-basic-data-field-name v-model="basicData.name"></form-basic-data-field-name>
    <!-- TODO handle to error -->
    <form-basic-data-field-sex v-model="basicData.sex"></form-basic-data-field-sex>

    <form-basic-data-field-age v-model="basicData.age"></form-basic-data-field-age>

    <form-basic-data-field-race></form-basic-data-field-race>

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
  data() {
    return {
      basicData: {
        name: "",
        sex: "",
        age: NaN
      }
    };
  }
};
</script>

<style scoped>
label {
  display: block;
}
</style>
