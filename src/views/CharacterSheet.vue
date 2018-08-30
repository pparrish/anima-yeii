<template>
    <div class="container">
        <section class="section ">
            <div class="container">
                <h1 class="title is-4">
                    Ficha de personaje
                </h1>
                <basic-data-form></basic-data-form>
            </div>
        </section>

    </div>

</template>

<script>
import BasicDataForm from "../components/BasicDataForm";
export default {
  name: "CharacterDetails",
  components: { BasicDataForm }
};
</script>

<style scoped>
</style>
