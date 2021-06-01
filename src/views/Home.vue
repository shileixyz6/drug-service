<template>
  <div class="home">
    <div class="header">
      <Welcome/>
      <Logo/>
      <Menu/>
    </div>
    <div class="main">
      <router-view/>
    </div>
    <div id="line">
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Welcome,
    Logo,
    Menu,
    Footer
  }
}
</script>

<style scoped>
  .home {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 204px;
    background-color: #42b983;
  }
  .main {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1400px;
    background-color: #f2f2f2;
  }
  #line {
    position: relative;
    background-color: #2B5AAA;
    /*top: 0px;*/
    width: 100%;
    height: 2px;
  }
  .footer {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 134px;
    background-color: #F2F2F2;
  }
</style>
