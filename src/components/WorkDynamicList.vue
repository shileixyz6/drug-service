<template>
  <div id="work-dynamic-list">
    <ul id="list">
      <li v-for="item in workTitleList" :key="item"><WorkTitle :title=item.title :date="item.date"></WorkTitle></li>
    </ul>
  </div>
</template>

<script>
import WorkTitle from '@/components/WorkTitle'
export default {
  name: 'WorkDynamicList',
  components: {
    WorkTitle
  },
  data () {
    return {
      workTitleList: [
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' },
        { date: '2021-06-10', title: '关于第二批短缺药品信息的公示' }
      ]
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
  #work-dynamic-list {
    position: relative;
    display: flex;
    top: 8px;
  }
  #list {
    position: relative;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding-left: 10px;
  }
</style>
