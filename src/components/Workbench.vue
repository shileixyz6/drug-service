<template>
  <div id="workbench">
    <div id="workbench-1">
      <div id="workbench-1-1">
        <img src="../assets/工作台-icon.png"/>
      </div>
      <div id="workbench-1-2">
        <span>工作台</span>
      </div>
      <div id="workbench-1-3">
        <span>进入</span>
      </div>
      <div id="workbench-1-4">
        <img src="../assets/工作台-箭头.png"/>
      </div>
    </div>
    <div id="workbench-2">
      <div class="workbench-2-1">
        <img class="workbench-2-1-1" src="../assets/信息审批.png">
        <span class="span-1">信息审批</span>
        <span class="span-2">{{ informationNum }}</span>
        <span class="span-3">条</span>
      </div>
      <div class="workbench-2-1">
        <img class="workbench-2-1-1" src="../assets/报告审批.png">
        <span class="span-1">报告审批</span>
        <span class="span-2">{{ reportNum }}</span>
        <span class="span-3">条</span>
      </div>
      <div class="workbench-2-1">
        <img class="workbench-2-1-1" src="../assets/谏言处置.png">
        <span class="span-1">谏言处置</span>
        <span class="span-2">{{ admonishNum }}</span>
        <span class="span-3">条</span>
      </div>
    </div>
    <div>
      <img src="../assets/国家短缺药品清单.png"/>
    </div>
    <div>
      <img src="../assets/省级短缺药品清单.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workbench',
  data () {
    return {
      informationNum: '8406',
      reportNum: '006',
      admonishNum: '006'
    }
  }
}
</script>

<style scoped>
  #workbench {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
  }
  #workbench-1 {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 37px;
    background-image: url("../assets/工作台-bg.png");
  }
  #workbench-1-1 {
    position: relative;
    left: 12px;
    width: 18px;
    height: 18px;
  }
  #workbench-1-2 {
    position: relative;
    left: 25px;
    width: 48px;
    height: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 16px;
    font-weight: 500;
  }
  #workbench-1-3 {
    position: relative;
    left: 105px;
    width: 24px;
    height: 16px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 16px;
    font-weight: 400;
  }
  #workbench-1-4 {
    position: relative;
    left: 110px;
  }
  #workbench-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    left: 12px;
    width: 216px;
    height: 134px;
    background: #E9F5FF;
    border: 1px solid #E1E1E1;
    border-radius: 6px;
  }
  .workbench-2-1 {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .workbench-2-1-1 {
    position: relative;
    left: 15px;
    width: 22px;
    height: 22px;
  }
  .span-1 {
    position: relative;
    left: 25px;
    width: 56px;
    height: 20px;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #333333;
    font-weight: 500;
  }
  .span-2 {
    position: relative;
    left: 40px;
    top: -3px;
    width: 58px;
    height: 31px;
    font-family: Helvetica;
    font-size: 26px;
    color: #2B5AAA;
    font-weight: 400;
  }
  .span-3 {
    position: relative;
    left: 42px;
    top: 3px;
    width: 14px;
    height: 20px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    font-weight: 400;
  }
</style>e
