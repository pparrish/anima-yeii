<template>
  <form @submit.prevent="$emit('finish')">

    <form-basic-data-field-name v-model="basicData.name"></form-basic-data-field-name>
    <input type="submit"
           value="ss"/>
  </form>
</template>

<script>
import FormBasicDataFieldName from "./FormBasicDataFieldName";

export default {
  name: "FormBasicData",
  components: { FormBasicDataFieldName },
  data() {
    return {
      basicData: {
        name: ""
      }
    };
  }
};
</script>

<style scoped>
</style>
