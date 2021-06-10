<template>
  <div id="work-title">
    <div class="el-icon-caret-right" id="icon"></div>
    <span id="title">{{ title }}</span>
    <span id="date">{{ date }}</span>
  </div>
</template>

<script>
export default {
  name: 'WorkTitle',
  props: ['date', 'title']
}
</script>

<style scoped>
  #work-title {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  #icon {
    width: 8px;
    height: 5px;
    color: #595A64;
  }
  #title {
    width: 225px;
    height: 21px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #22273E;
    font-weight: 400;
  }
  #date {
    width: 78px;
    height: 18px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #5F626E;
    text-align: center;
    font-weight: 400;
  }
</style>
