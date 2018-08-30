<template>
    <div class="section">

        <h2 class="title is-5">Datos básicos</h2>
        <p class="subtitle">Fundamentales para la identidad {{nameToShow}}.</p>

        <div class="field">
            <label class="label" >Nombre.</label>
            <div class="control">
                <input type="text" class="input" placeholder="Loremín" required v-model="name">
            </div>
            <p class="help is-success">Puedes colocar apellidos si asi lo deseas.</p>
        </div>

        <div class="field">
            <label class="label">Sexo.</label>
            <div class="buttons has-addons">
                <span class="button" :class="{'is-success': sex === 'male' ,'is-selected': sex === 'male' }" @click="sexSelected('male')">Hombre.</span>
                <span class="button" :class="{ 'is-success': sex === 'woman' ,'is-selected': sex === 'woman' }" @click="sexSelected('woman')">Mujer.</span>
            </div>
        </div>

        <div class="field">
            <label class="label">Edad.</label>
            <div class="control ">
                <input type="number" class="input is-small" min="1" placeholder="???" v-model.number="age"/>
            </div>
            <p class="help is-success">Deja en blanco para indicar que se desconoce la edad del personaje.</p>
        </div>

        <div class="field">
            <label class="label">Raza.</label>
            <div class="control">
                <div class="select">
                    <select v-model="race">
                        <option value="human" default>Humano</option>
                        <option disabled>--------------------------------------------</option>
                        <option disabled>Por el momento no hay más razas disponibles.</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "basic-data-form",
  data() {
    return {
      name: "",
      age: undefined,
      sex: "",
      race: "human",
      nameToShow: "del personaje",
      changingNameToShow: false
    };
  },
  methods: {
    changeNameToShow() {
      this.changingNameToShow = false;
      this.nameToShow = this.name === "" ? "del personaje" : `de ${this.name}`;
    },
    sexSelected(sex) {
      this.sex = sex;
    }
  },
  watch: {
    name: function() {
      if (this.changingNameToShow === false) {
        setTimeout(this.changeNameToShow, 1000);
        this.changingNameToShow = true;
      }
    }
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
