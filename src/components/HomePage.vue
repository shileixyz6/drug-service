<template>
  <div id="home-page">
    <div id="home-page-1">
      <img src="../assets/home-banner.png"/>
    </div>
    <div id="home-page-2">
      <div id="home-page-2-1">
        <img src="../assets/焦点图.png">
      </div>
      <div id="home-page-2-2">
        <div id="home-page-2-2-1">
          <span>工作</span>
          <span>动态</span>
          <span>更多>></span>
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
    /*height: auto;*/
  }
  #home-page-1 {
    position: relative;
    display: flex;
    top: 18px;
    width: 1200px;
    height: 100px;
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
  #home-page-2-2-2 {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  #home-page-2-2-2-1 {
    width: 76px;
    height: 1px;
    background: #1A65B9;
  }
  #home-page-2-2-2-2 {
    width: 266px;
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
</style>
