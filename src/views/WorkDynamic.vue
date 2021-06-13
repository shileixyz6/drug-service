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
      <div id="work-dynamic-2-1">
        <div id="work-dynamic-2-1-1">
          <div style="position: relative; left: 25px; top: 15px;">
            <span id="work-dynamic-2-1-1-1">短缺药品行业</span>
            <span id="work-dynamic-2-1-1-2">报告</span>
          </div>
        </div>
        <div id="work-dynamic-2-1-2">
          <div id="work-dynamic-2-1-2-1">
          </div>
          <div id="work-dynamic-2-1-2-2">
          </div>
        </div>
        <div id="work-dynamic-2-1-3">
          <template v-for="items in reportList" :key="items">
            <IndustryReports :report="items"/>
          </template>
        </div>
      </div>
      <div id="work-dynamic-2-2">
        <Workbench/>
      </div>
    </div>
  </div>
</template>

<script>
import Workbench from '@/components/Workbench'
import IndustryReports from '@/components/IndustryReports'
export default {
  name: 'WorkDynamic',
  components: {
    Workbench,
    IndustryReports
  },
  data () {
    return {
      reportList: [
        {
          title: '标题标题标题标题标题标题标题标题标题标题标题标题',
          content: '中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…',
          date: '2021-01-22',
          view: 231,
          favorites: 231
        },
        {
          title: '标题标题标题标题标题标题标题标题标题标题标题标题',
          content: '中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…',
          date: '2021-01-22',
          view: 231,
          favorites: 231
        },
        {
          title: '标题标题标题标题标题标题标题标题标题标题标题标题',
          content: '中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…',
          date: '2021-01-22',
          view: 231,
          favorites: 231
        },
        {
          title: '标题标题标题标题标题标题标题标题标题标题标题标题',
          content: '中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…',
          date: '2021-01-22',
          view: 231,
          favorites: 231
        },
        {
          title: '标题标题标题标题标题标题标题标题标题标题标题标题',
          content: '中电万维公司2020年党建工作会议3月30日在孵化大厦多功能厅召开。会议全面落实甘肃公司2020年党建工作会议各项任务，总结回顾2019年党建工作成果及不足，全面部署2020年整体党建工作，持续推进党的建设与企业生产经营深度融合，为实现企业高质量发展提…',
          date: '2021-01-22',
          view: 231,
          favorites: 231
        }
      ]
    }
  }
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
    display: flex;
    flex-direction: column;
    width: 933px;
    height: 841px;
    background: #FFFFFF;
  }
  #work-dynamic-2-1-1 {
    display: flex;
    flex-direction: row;
  }
  #work-dynamic-2-1-1-1 {
    width: 108px;
    height: 25px;
    font-family: Helvetica;
    font-size: 18px;
    color: #1A65B9;
    font-weight: 400;
  }
  #work-dynamic-2-1-1-2 {
    position: relative;
    left: 8px;
    top: -3px;
    width: 26px;
    height: 18px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #333333;
    font-weight: 400;
  }
  #work-dynamic-2-1-2 {
    position: relative;
    display: flex;
    flex-direction: row;
    left: 25px;
    top: 11px;
  }
  #work-dynamic-2-1-2-1 {
    position: relative;
    display: flex;
    top: 10px;
    width: 145px;
    height: 1px;
    background: #1A65B9;
  }
  #work-dynamic-2-1-2-2 {
    position: relative;
    display: flex;
    left: 2px;
    top: 10px;
    width: 735px;
    height: 1px;
    background: #D8D8D8;
  }
  #work-dynamic-2-1-3{
    display: flex;
    flex-direction: column;
    position: relative;
    top: 23px;
    left: 25px;
    width: 882px;
    height: 680px;
    /*background: #3e3e22;*/
  }
  #work-dynamic-2-2 {
    width: 244px;
    height: 384px;
    background: #FFFFFF;
  }
</style>
