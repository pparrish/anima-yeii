<template>
  <div/>
</template>

<script>
export default {
  name: "FormCharacteristics",
  props: {
    characteristics: {
      type: Object,
      default: () => {
        return {
          strength: 0,
          dexterity: 0,
          agility: 0,
          physique: 0,
          intelligence: 0,
          might: 0,
          will: 0,
          perception: 0
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
