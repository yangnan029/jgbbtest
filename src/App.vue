<template>
  <div id="app">
    <c-header></c-header>
    <router-view/>
    <c-footer></c-footer>
  </div>
</template>

<script>
import cHeader from "./components/header.vue";
import cFooter from "./components/footer.vue";
export default {
  name: 'App',
  components:{
    cHeader,
    cFooter
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>
