<template>
  <div id="work-dynamic">
    <div id="work-dynamic-1">
      <div style="position: relative; left: 25px">
        <span id="work-dynamic-1-1">当前位置：</span>
        <span id="work-dynamic-1-2">首页</span>
        <span id="work-dynamic-1-3">&nbsp;&nbsp;>&nbsp;&nbsp;行业报告信息</span>
      </div>
    </div>
    <div id="work-dynamic-2">
      <div id="work-dynamic-2-1"></div>
      <div id="work-dynamic-2-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkDynamic'
}
</script>

<style scoped>
  #work-dynamic {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 18px;
    width: 1200px;
    height: 955px;
  }
  #work-dynamic-1 {
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 46px;
    background: #FFFFFF;
    align-items: center;
  }
  #work-dynamic-1-1 {
    width: 75px;
    height: 21px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    line-height: 21px;
    font-weight: 400;
  }
  #work-dynamic-1-2 {
    width: 30px;
    height: 21px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #2B5AAA;
    line-height: 21px;
    font-weight: 400;
  }
  #work-dynamic-1-3 {
    width: 120px;
    height: 21px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    line-height: 21px;
    font-weight: 400;
  }
  #work-dynamic-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 18px;
  }
  #work-dynamic-2-1 {
    width: 933px;
    height: 841px;
    background: #FFFFFF;
  }
  #work-dynamic-2-2 {
    width: 244px;
    height: 470px;
    background: #FFFFFF;
  }
</style>
