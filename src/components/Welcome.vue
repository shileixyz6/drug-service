<template>
  <div class="welcome">
    <div id="welcome-msg">
      <p>欢迎您进入短缺药品综合服务平台</p>
    </div>
    <div id="user-avatar">
      <img src="../assets/user-avatar.png">
    </div>
    <div id="name">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome.vue',
  data () {
    return {
      name: '张三'
    }
  }
}
</script>

<style scoped>
  .welcome {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 34px;
    background-color: #F3F3F3;
  }
  #welcome-msg {
    position: relative;
    left: 9%;
    width: 180px;
    height: 12px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #000000;
    text-align: center;
    line-height: 12px;
    font-weight: 400;
  }
  #user-avatar {
    position: relative;
    left: 1000px;
    top: 6px;
    width: 20px;
    height: 20px;
    border: 1px solid #C1D2DD;
    border-radius: 17px;
  }
  #name {
    position: relative;
    display: flex;
    left: 1009px;
    top: 8px;
    width: 28px;
    height: 20px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    font-weight: 400;
  }
</style>
