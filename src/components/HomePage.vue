<template>
  <div id="home-page">
    <div id="home-page-1">
      <button id="button">点击进去>></button>
    </div>
    <div id="home-page-2">
      <div id="home-page-2-1">
        <img src="../assets/焦点图.png">
      </div>
      <div id="home-page-2-2">
        <div id="home-page-2-2-1">
          <span id="work">工作</span>
          <span id="dynamic">动态</span>
          <span id="more">更多>></span>
        </div>
        <div id="home-page-2-2-2">
          <div id="home-page-2-2-2-1">
          </div>
          <div id="home-page-2-2-2-2">
          </div>
        </div>
        <div id="home-page-2-2-3">
          <WorkDynamicList/>
        </div>
      </div>
      <div id="home-page-2-3">
        <div id="home-page-2-3-1">
          <div id="home-page-2-3-1-1">
            <img src="../assets/工作台-icon.png"/>
          </div>
          <div id="home-page-2-3-1-2">
            <span>工作台</span>
          </div>
          <div id="home-page-2-3-1-3">
            <span>进入</span>
          </div>
          <div id="home-page-2-3-1-4">
            <img src="../assets/工作台-箭头.png"/>
          </div>
        </div>
        <div id="home-page-2-3-2">
          <div class="home-page-2-3-2-1">
            <img class="home-page-2-3-2-1-1" src="../assets/信息审批.png">
            <span class="span-1">信息审批</span>
            <span class="span-2">{{ informationNum }}</span>
            <span class="span-3">条</span>
          </div>
          <div class="home-page-2-3-2-1">
            <img class="home-page-2-3-2-1-1" src="../assets/报告审批.png">
            <span class="span-1">报告审批</span>
            <span class="span-2">{{ reportNum }}</span>
            <span class="span-3">条</span>
          </div>
          <div class="home-page-2-3-2-1">
            <img class="home-page-2-3-2-1-1" src="../assets/谏言处置.png">
            <span class="span-1">谏言处置</span>
            <span class="span-2">{{ admonishNum }}</span>
            <span class="span-3">条</span>
          </div>
        </div>
        <div id="home-page-2-3-3">
          <img src="../assets/国家短缺药品清单.png"/>
        </div>
        <div id="home-page-2-3-">
          <img src="../assets/省级短缺药品清单.png"/>
        </div>
      </div>
    </div>
    <div id="home-page-3">
      <img src="../assets/首页-banner2.png">
    </div>
    <div id="home-page-4">
      <div id="home-page-4-1">
        <img src="../assets/行业报告-icon.png">
      </div>
      <div id="home-page-4-2">
        <div>
          <img src="../assets/行业报告.png">
        </div>
        <div>
          <img src="../assets/行业报告.png">
        </div>
        <div>
          <img src="../assets/行业报告.png">
        </div>
        <div>
          <img src="../assets/行业报告.png">
        </div>
        <div>
          <img src="../assets/行业报告.png">
        </div>
      </div>
    </div>
    <div id="home-page-5">
      <div class="home-page-5">
      </div>
      <div class="home-page-5"></div>
      <div class="home-page-5"></div>
    </div>
  </div>
</template>

<script>
import WorkDynamicList from '@/components/WorkDynamicList'
export default {
  name: 'HomePage',
  components: {
    WorkDynamicList
  },
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
  #home-page {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1200px;
  }
  #home-page-1 {
    position: relative;
    display: flex;
    top: 18px;
    width: 1200px;
    height: 100px;
    background-image: url('../assets/home-banner.png');
  }
  #button {
    position: relative;
    left: 475px;
    top: 50px;
    width: 85px;
    height: 21px;
    background: #1A65B9;
    border-radius: 105px;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    font-weight: 400;
  }
  #home-page-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 36px;
    height: auto;
  }
  #home-page-2-1 {
  }
  #home-page-2-2 {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 394px;
    height: 384px;
    background: #FFFFFF;
  }
  #home-page-2-2-1 {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 15px;
  }
  #home-page-2-2-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 11px;
  }
  #home-page-2-2-2-1 {
    position: relative;
    display: flex;
    left: 25px;
    top: 10px;
    width: 70px;
    height: 1px;
    background: #1A65B9;
  }
  #home-page-2-2-2-2 {
    position: relative;
    display: flex;
    left: 28px;
    top: 10px;
    width: 264px;
    height: 1px;
    background: #D8D8D8;
  }
  #home-page-2-3 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    left: 15px;
    width: 244px;
    height: 384px;
    background: #FFFFFF;
  }
  #home-page-2-3-1 {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 37px;
    background-image: url("../assets/工作台-bg.png");
  }
  #home-page-2-3-1-1 {
    position: relative;
    left: 12px;
    width: 18px;
    height: 18px;
  }
  #home-page-2-3-1-2 {
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
  #home-page-2-3-1-3{
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
  #home-page-2-3-1-4 {
    position: relative;
    left: 110px;
  }
  #home-page-2-3-2 {
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
  .home-page-2-3-2-1 {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  .home-page-2-3-2-1-1 {
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
  #home-page-3 {
    position: relative;
    display: flex;
    top: 54px;
  }
  #home-page-4 {
    position: relative;
    display: flex;
    flex-direction: column;
    top: 72px;
    width: 1200px;
    height: 374px;
    background: #FFFFFF;
  }
  #home-page-4-1 {
    position: relative;
    left: 479px;
    top: 15px;
    width: 241px;
    height: 51px;
  }
  #home-page-4-2 {
    position: relative;
    display: flex;
    top: 30px;
    flex-direction: row;
    justify-content: space-evenly;
  }
  #home-page-5 {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 90px;
  }
  .home-page-5 {
    width: 386px;
    height: 330px;
    background: #FFFFFF;
  }
  #work {
    position: relative;
    left: 25px;
    width: 36px;
    height: 25px;
    font-family: Helvetica;
    font-size: 18px;
    color: #1A65B9;
    text-align: center;
    font-weight: 400;
  }
  #dynamic {
    position: relative;
    left: 30px;
    top: 3px;
    width: 26px;
    height: 18px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #333333;
    text-align: center;
    font-weight: 400;
  }
  #more {
    position: relative;
    display: flex;
    flex-direction: row;
    left: 250px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    text-align: center;
    font-weight: 400;
  }
</style>
