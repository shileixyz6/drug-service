<template>
  <div id="nav-menu">
    <div class="menu">
      <div id="menu-1">
        <a>首页</a>
      </div>
      <div id="menu-2">
        <a>工作动态</a>
      </div>
      <div id="menu-3">
        <a>行业报告信息</a>
      </div>
      <div id="menu-4">
        <a>药品短缺清单</a>
      </div>
      <div id="menu-5">
        <a>药企停产信息</a>
      </div>
      <div id="menu-6">
        <a>协同联络单位</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
  #nav-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 58px;
    background-color: #2B5AAA;
  }
  .menu {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    left: 5%;
    top: 15px;
    height: 25px;
    width: 90%;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 400;
  }
</style>
