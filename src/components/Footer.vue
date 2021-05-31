<template>
  <div id="footer">
    <di id="content-1">
      <p>本站由国家药品监督管理局主办&nbsp;&nbsp;版权所有：国家药品监督管理局</p>
    </di>
    <di id="content-2">
      <p>网站表示码：bm0001</p>
      &nbsp;&nbsp;
      <p>备案号：京ICP备12345678号</p>
    </di>
    <di id="content-3">
      <p>地址：北京市西城区展览路北露园1号</p>
      &nbsp;&nbsp;
      <p>邮编：100037</p>
      &nbsp;&nbsp;
      <p>电话：68331122</p>
    </di>
  </div>
</template>

<script>
export default {
  name: 'Footer.vue'
}
</script>

<style scoped>
  #footer {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  #content-1 {
  }
  #content-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #content-3 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  p {
    margin: 6px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    font-weight: 400;
  }
</style>
