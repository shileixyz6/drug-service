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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="home-page-3">
      <img src="../assets/首页-banner2.png">
    </div>
    <div id="home-page-4">
      <div id="home-page-4-1"></div>
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
    left: 15px;
    width: 244px;
    height: 384px;
    background: #FFFFFF;
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
  #home-page-4-2 {
    position: relative;
    display: flex;
    top: 85px;
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
