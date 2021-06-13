<template>
  <div id="table">
    <div id="table-title">
      <span class="table-title-1" v-for="item in titles" :key="item">{{ item }}</span>
    </div>
    <div id="table-content">
      <div id="table-content-1">
        <template v-for="items in content" :key="items">
          <div id="table-content-1-2">
            <span class="table-content-1-2-1" v-for="item in items" :key="item">{{ item }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    titles: Array,
    content: Array
  }
}
</script>

<style scoped>
  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  #table-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    background-color: #EFF4FA;
    justify-content: space-around;
    align-items: center;
  }
  .table-title-1 {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    font-weight: 400;
  }
  #table-content {
    display: flex;
    flex-direction: column;
  }
  #table-content-1{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 230px;
  }
  #table-content-1-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .table-content-1-2-1 {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #22273E;
    font-weight: 400;
  }
</style>
