<template>
  <div class="logo">
    <div id="logo-1">
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo.vue'
}
</script>

<style scoped>
  .logo {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 112px;
    background-color: #FFFFFF;
  }
  #logo-1 {
    position: relative;
    left: 9%;
    top: 30px;
  }
</style>
