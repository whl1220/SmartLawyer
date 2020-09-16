<template>
  <div id="app">
    <router-view/>
    <NavBottom/>
  </div>
</template>

<style lang="scss">
  #app {
    height: 12.34rem;
    background-color: #eeeeee;
  }
</style>
<script>
import NavBottom from '@/components/NavBottom.vue'
import NavTop from '@/components/NavTop.vue'
export default {
  components: {
    NavBottom,NavTop
  },
  data(){
    return{
    }
  },
  created(){
  }

}
</script>
