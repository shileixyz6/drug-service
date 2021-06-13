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
        <Workbench/>
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
        <div class="home-page-5-1">
          <span class="home-page-5-1-1">短缺</span>
          <span class="home-page-5-1-2">药品</span>
          <span class="home-page-5-1-3">更多>></span>
        </div>
        <div class="home-page-5-2">
          <div class="home-page-5-2-1">
          </div>
          <div class="home-page-5-2-2">
          </div>
        </div>
        <div class="home-page-5-2-3">
          <Table :titles="medicinesTableTitle" :content="medicinesTableList"/>
        </div>
      </div>
      <div class="home-page-5">
        <div class="home-page-5">
          <div class="home-page-5-1">
            <span class="home-page-5-1-1">联络</span>
            <span class="home-page-5-1-2">单位</span>
            <span class="home-page-5-1-3">更多>></span>
          </div>
          <div class="home-page-5-2">
            <div class="home-page-5-2-1">
            </div>
            <div class="home-page-5-2-2">
            </div>
          </div>
          <div class="home-page-5-2-3">
            <Table :titles="departmentTableTitle" :content="departmentTableList"/>
          </div>
        </div>
      </div>
      <div class="home-page-5">
        <div class="home-page-5">
          <div class="home-page-5-1">
            <span class="home-page-5-1-1">药企</span>
            <span class="home-page-5-1-2">停产</span>
            <span class="home-page-5-1-3">更多>></span>
          </div>
          <div class="home-page-5-2">
            <div class="home-page-5-2-1">
            </div>
            <div class="home-page-5-2-2">
            </div>
          </div>
          <div class="home-page-5-2-3">
            <Table :titles="discontinuedTableTitle" :content="discontinuedTableList"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkDynamicList from '@/components/WorkDynamicList'
import Table from '@/components/Table'
import Workbench from '@/components/Workbench'
export default {
  name: 'HomePage',
  components: {
    WorkDynamicList,
    Table,
    Workbench
  },
  data () {
    return {
      medicinesTableTitle: ['药品名称', '剂型', '生产企业', '地域'],
      medicinesTableList: [
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '兰州'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '兰州'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '兰州'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '兰州'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '兰州']
      ],
      departmentTableTitle: ['机构单位', '部门', '姓名', '联系方式'],
      departmentTableList: [
        ['卫健委', '部门', '吴文德', '18919909090'],
        ['卫健委', '部门', '吴文德', '18919909090'],
        ['卫健委', '部门', '吴文德', '18919909090'],
        ['卫健委', '部门', '吴文德', '18919909090'],
        ['卫健委', '部门', '吴文德', '18919909090']
      ],
      discontinuedTableTitle: ['药品名称', '剂型', '生产企业', '停产时间'],
      discontinuedTableList: [
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '2020.08.02'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '2020.08.02'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '2020.08.02'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '2020.08.02'],
        ['阿莫西林', '片剂', '兰州佛慈制药厂', '2020.08.02']
      ]

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
    height: 1405px;
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
    display: flex;
    flex-direction: column;
    width: 386px;
    height: 330px;
    background: #FFFFFF;
  }
  .home-page-5-1 {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 15px;
  }
  .home-page-5-1-1 {
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
  .home-page-5-1-2 {
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
  .home-page-5-1-3 {
    position: relative;
    display: flex;
    flex-direction: row;
    left: 265px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    text-align: center;
    font-weight: 400;
  }
  .home-page-5-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    top: 11px;
  }
  .home-page-5-2-1 {
    position: relative;
    display: flex;
    left: 25px;
    top: 10px;
    width: 70px;
    height: 1px;
    background: #1A65B9;
  }
  .home-page-5-2-2 {
    position: relative;
    display: flex;
    left: 28px;
    top: 10px;
    width: 272px;
    height: 1px;
    background: #D8D8D8;
  }
  .home-page-5-2-3 {
    position: relative;
    left: 20px;
    top: 30px;
    width: 351px;
    height: 274px;
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
