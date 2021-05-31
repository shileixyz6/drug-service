<template>
  <div id="nav-menu">
    <div id="nav-menu-1">
      <ul id="menu">
        <li><router-link to="/homePage">首页</router-link></li>
        <li><router-link to="/workDynamic">工作动态</router-link></li>
        <li><router-link to="/reportInfo">行业报告信息</router-link></li>
        <li><router-link to="/shortageList">药品短缺清单</router-link></li>
        <li><router-link to="/discontinuedInfo">药企停产信息</router-link></li>
        <li><router-link to="/contactUnit">协同联络单位</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  dada () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  #nav-menu {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 58px;
    background-color: #2B5AAA;
  }
  #nav-menu-1 {
    position: relative;
    display: flex;
    align-items: center;
    width: 1300px;
  }
  #menu {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    height: 25px;
    width: 90%;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
    list-style-type: none;
  }
</style>
