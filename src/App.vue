<template lang="pug">
    div.testClass
      router-view
      el-button-group
        el-button(@click="href") 跳转页面
        el-button(@click="show") 显示toast
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    data: string = 'this is App data'

    href():void{
      this.$router.push(this.$route.path === '/' ? '/App' : '/')
    }

    show():void{
      this.$message.info('这是一条消息提示')
    }

    created(){
      this.$get('/testUrl').then(data=>{
        console.log('s')
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .testClass{
    text-align: center;
  }
</style>
