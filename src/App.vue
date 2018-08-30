<template>
  <div id="app">

      <div class="proyect-status-message" >Alpha</div>

      <router-view/>

      <footer class="footer">
          <div class="content has-text-centered">
              <p>Creado por <a href="#">Parrish.</a></p>
              <p>
                  <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                  </a>
              </p>
          </div>
      </footer>
  </div>

</template>

<style>
.proyect-status-message {
  background: darkorchid;
  color: whitesmoke;
  text-align: center;
  padding: 0.5rem;
}
</style>
