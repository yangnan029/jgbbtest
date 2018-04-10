<template>
  <div class="login">
      <c-header></c-header>
      <div class="main"></div>
      <c-footer></c-footer>
  </div>
</template>
<script>

import cHeader from "./header.vue";
import cFooter from "./footer.vue"
export default {
  data(){
      return {};
  },
  components:{
      cHeader,
      cFooter
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/login.scss"
</style>
