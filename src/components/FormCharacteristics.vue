<template>
  <div>
    <span 
      v-if="!pointsRemaind" 
      id="no-points-message" >No tienes puntos a repartir</span>
    <div/>
  </div>
</template>

<script>
export default {
  name: "FormCharacteristics",
  props: {
    characteristics: {
      type: Object,
      required: false,
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
    },
    points: {
      type: Object,
      required: false,
      default: () => {
        return {
          type: "",
          values: [],
          total: 0
        };
      }
    }
  },
  data() {
    return {
      localPoints: undefined,
      localCharacteristics: undefined
    };
  },
  computed: {
    pointsRemaind() {
      return this.localPoints.total;
    },
    sortedPoints() {
      return this.localPoints.values.map(a => a).sort((a, b) => b - a);
    }
  },
  created() {
    this.localPoints = this.points;
    this.localCharacteristics = this.characteristics;
  }
};
</script>

<style scoped>
</style>
