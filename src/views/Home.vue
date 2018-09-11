<template>
    <div>
        <section class="hero is-primary is-bold is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Anima-Yeii</h1>
                    <h2 class="subtitle">La mejor forma de jugar a <a href="http://www.edgeent.com/libros/coleccion/anima_beyond_fantasy">Anima: Beyond Fantasy</a> </h2>

                    <div class="level">
                        <div class="level-item ">
                            <router-link to="character-sheet" class="button is-dark" id="link-to-chart">Empieza a Jugar!!</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="subtitle">Crea tus fichas de personaje de forma comoda</h2>
                <p>Anima-Yeii te ofrece un asistente para poder crear tus fichas desde 0 sin tener que preocuparte por revisar las guias constantemente.</p>
                <hr>
                <h3 class="subtitle">Personaliza la experiencia.</h3>
                <p>Puedes crear una ficha siguiendo las pautas estandar o saltalte las reglas y personalizar la experiencia sin mayores problemas</p>
                <hr>
                <h2 class="subtitle">Ideal para los nuevos jugadores</h2>
                <p>Cuando inicias en el juego la cantidad abrumadora de reglas y sistemas puede lograr que no disfrutes la experiencia de juego como se debe. Deja que nuestro asistente te guie paso a paso en todo el entorno de este maravilloso juego de rol.</p>
                <p>Cada parte de nuestra aplicacion tiene ayudas y explicaciones para los más nuevos haciendo la curba de aprendisaje sea más comoda.</p>
                <hr>
                <h2 class="subtitle">Organiza tus partidas </h2>
                <p>Los Masters de la partida estarán a gusto sabiendo que pueden controlar cada sistema del juego desde un solo lugar, no necesitas ir a otro sitio para buscar los dados y todas las tiradas se quedan registradas.</p>
                <p>Anima-yeii funciona en tiempo real y todos los sucesos de la partida son visualizados por las personas que se encuentran jugando.</p>
                <hr>
                <h2 class="subtitle">Aun estamos en fase beta</h2>
                <p>Nuestra intencion es que este sea el complemento perfecto para que puedas jugar a gusto dandote todas las herramientas posibles para tu comodidad, pero fase de desarrollo, no desesperes que poco a poco añadiremos todas las funcionalidades.</p>
            </div>
        </section>

   </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
#link-to-chart {
  margin-top: 2rem;
}
</style>
