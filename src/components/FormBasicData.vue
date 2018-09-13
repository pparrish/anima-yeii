<template>
  <form @submit.prevent="$emit('finish')">

    <form-basic-data-field-name v-model="basicData.name"></form-basic-data-field-name>

    <form-basic-data-field-sex v-model="basicData.sex"></form-basic-data-field-sex>

  </form>
</template>

<script>
import FormBasicDataFieldName from "./FormBasicDataFieldName";
import FormBasicDataFieldSex from "./FormBasicDataFieldSex";

export default {
  name: "FormBasicData",
  components: { FormBasicDataFieldSex, FormBasicDataFieldName },
  data() {
    return {
      basicData: {
        name: "",
        sex: ""
      }
    };
  }
};
</script>

<style scoped>
</style>
