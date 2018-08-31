<template>
    <div>

        <h2 class="title is-5">Datos básicos</h2>
        <p class="subtitle">Fundamentales para la identidad {{nameToShow}}.</p>

    <form class="container" @submit.prevent="onSubmit">
        <div class="field">
            <label class="label" >Nombre.</label>
            <div class="control">
                <input type="text" class="input" placeholder="Loremín" required v-model="name">
            </div>
            <p class="help is-success">Puedes colocar apellidos si asi lo deseas.</p>
            <p class="help is-danger" v-show="errors.includes('no-name')">Tu personaje debe tener un nombre.</p>
        </div>

        <div class="field">
            <label class="label">Sexo.</label>
            <div class="buttons has-addons control">
                <div class="button" :class="{'is-success': sex === 'hombre' ,'is-selected': sex === 'hombre' }" @click="sexSelected('hombre')">Hombre.</div>
                <div class="button" :class="{ 'is-success': sex === 'mujer' ,'is-selected': sex === 'woman' }" @click="sexSelected('mujer')">Mujer.</div>
            </div>
            <p class="help is-danger buttons-help" v-show="errors.includes('sex-not-choice')">Debes elegir el sexo de tu personaje.</p>
        </div>

        <div class="field">
            <label class="label">Edad.</label>
            <div class="control ">
                <input type="number" class="input is-small" min="1" placeholder="???" v-model.number="age"/>
            </div>
            <p class="help is-warning" v-show="age === '' ">Deja en blanco para indicar que se desconoce la edad del personaje.</p>
        </div>

        <div class="field">
            <label class="label">Raza.</label>
            <div class="control">
                <div class="select">
                    <select v-model="race">
                        <option value="humano" default>Humano</option>
                        <option disabled>--------------------------------------------</option>
                        <option disabled>Por el momento no hay más razas disponibles.</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="container is-primary">
            <div class="level">
                <div class="level-item level-right ">
                    <input type="submit" class="button is-success" value="Características" />
                </div>
            </div>
        </div>
    </form>

    </div>
</template>

<script>
export default {
  name: "basic-data-form",
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      race: "humano",
      nameToShow: "del personaje",
      changingNameToShow: false,
      errors: []
    };
  },
  methods: {
    changeNameToShow() {
      this.changingNameToShow = false;
      this.nameToShow = this.name === "" ? "del personaje" : `de ${this.name}`;
    },
    sexSelected(sex) {
      this.sex = sex;
    },
    onSubmit() {
      let basicData = {};

      if (this.name !== "") {
        basicData.name = this.name;
      } else {
        this.setNoNameError();
        return;
      }
      if (this.sex !== "") basicData.sex = this.sex;
      else {
        this.setSexError();
        return;
      }
      if (this.age === "") basicData.age = -1;
      else basicData.age = this.age;

      if (this.race !== "") basicData.race = this.race;
      else return;
      this.$store.commit("basicData", basicData);
      this.$emit("submit");
    },
    setSexError() {
      if (this.sex === "") {
        this.errors.push("sex-not-choice");
      } else {
        let index = this.errors.findIndex(error => error === "sex-not-choice");
        this.errors.splice(index, 1);
      }
    },
    setNoNameError() {
      if (this.name === "") {
        this.errors.push("no-name");
      } else {
        let index = this.errors.findIndex(error => error === "no-name");
        this.errors.splice(index, 1);
      }
    }
  },
  watch: {
    name: function() {
      if (this.changingNameToShow === false) {
        setTimeout(this.changeNameToShow, 1000);
        this.changingNameToShow = true;
      }
      this.setNoNameError();
    },
    sex() {
      this.setSexError();
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
.buttons-help {
  margin-top: -1.2rem;
}
</style>
