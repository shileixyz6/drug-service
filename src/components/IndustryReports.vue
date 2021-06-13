<template>
  <div id="industry-report">
    <div id="report-title">
      <span>{{ report.title }}</span>
    </div>
    <div id="report-content">
      <span>{{ report.content }}</span>
    </div>
    <div id="report-view">
      <div id="report-view-1">
        <span>发布时间：{{ report.date }}</span>
      </div>
      <div id="report-view-2">
        <img src="../assets/浏览量.png">
        <span id="view">{{ report.view }}</span>
      </div>
      <div id="report-view-3">
        <img src="../assets/收藏量.png">
        <span id="favorites">{{ report.favorites }}</span>
      </div>
    </div>
    <div id="dividing-line">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndustryReports',
  props: {
    report: Object
  }
}
</script>

<style scoped>
  #industry-report {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 125px;
    margin-top: 13px;
  }
  #report-title {
    width: 384px;
    height: 22px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0;
    font-weight: 550;
  }
  #report-content {
    width: 885px;
    height: 48px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    text-align: justify;
    line-height: 24px;
    font-weight: 400;
  }
  #report-view {
    display: flex;
    flex-direction: row;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #666666;
    font-weight: 400;
  }
  #report-view-1 {
  }
  #report-view-2{
    position: relative;
    left: 615px;
  }
  #view {
    position: relative;
    left: 12px;
    top: -4px;
  }
  #report-view-3{
    position: relative;
    left: 660px;
  }
  #favorites{
    position: relative;
    left: 12px;
    top: -4px;
  }
  #dividing-line {
    width: 885px;
    height: 1px;
    transform: scaleY(-1);
    background: #EEEEEE;
  }
</style>
