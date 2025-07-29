<template>
  <NavBar />
  <router-view/>
</template>

<script> //js
import NavBar from '@/components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
export default {
  components: {
    NavBar
  }
}
</script>

<style> /*css */
body {
  /* @: current root directory */
  background-image: url("@/assets/images/logo.png");
  background-size: cover;
}
</style>
