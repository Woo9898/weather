<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/toolBar.vue'
export default {
  components:{
    ToolBar
  }
}
</script>

<style>

</style>