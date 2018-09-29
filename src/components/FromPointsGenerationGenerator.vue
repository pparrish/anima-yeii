<template>
  <div />
</template>

<script>
export default {
  name: "FromPointGenerationGenerator",
  props: {
    seed: {
      type: String,
      default: () => "NaNhumano"
    },
    method: {
      type: String,
      required: true,
      default: () => "ADVANTAGE"
    }
  },
  watch: {
    method(newMethod) {
      this.$emit("values-generated", this[newMethod]());
    }
  },
  created() {
    this.$emit("values-generated", this[this.method]());
  },
  methods: {
    JSF(seed) {
      function jsf() {
        var e = s[0] - ((s[1] << 27) | (s[1] >> 5));
        (s[0] = s[1] ^ ((s[2] << 17) | (s[2] >> 15))),
          (s[1] = s[2] + s[3]),
          (s[2] = s[3] + e),
          (s[3] = s[0] + e);
        return (s[3] >>> 0) / 4294967295; // 2^32-1
      }
      seed >>>= 0;
      var s = [0xf1ea5eed, seed, seed, seed];
      for (var i = 0; i < 20; i++) jsf();
      return jsf;
    },
    ADVANTAGE() {
      let random = this.JSF(this.seed);
      let values = new Array(8)
        .fill()
        .map(() => Math.floor(random() * (11 - 4)) + 4);
      let minValue = Math.min.apply(null, values);
      let minValueIndex = values.indexOf(minValue);
      values[minValueIndex] = 9;
      return values;
    },
    RISK() {
      let random = this.JSF(this.seed);
      return new Array(8).fill().map(() => {
        let firstDice = Math.floor(random() * 10) + 1;
        let secondDice = Math.floor(random() * 10) + 1;
        return Math.max(firstDice, secondDice);
      });
    },
    RANDOM() {
      let random = this.JSF(this.seed);
      return new Array(8).fill().map(() => Math.floor(random() * 10) + 1);
    },
    POINTS_RANDOM() {
      let random = this.JSF(this.seed);
      return new Array(7).fill().map(() => Math.floor(random() * 10) + 1);
    }
  }
};
</script>
