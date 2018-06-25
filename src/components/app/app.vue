<template lang="pug">
  div
    Pager(:msg="msg" @get="appGet")
    div(style="margin: 5px;")
      div 子组件传过来的值:{{rev}}
    ul
      li(v-for="(item,index) in arr" :key="index") {{item}}
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Pager from "@/components/pager/pager.vue";


  @Component({
    components: {
      Pager
    }
  })
  export default class AppTwo extends Vue {
    msg = "i'm main App component";
    rev?: string = '';
    arr: string[] = []

    appGet(val: string): void {
      this.rev = val;
      this.arr.push(val)
    }

    beforeRouteEnter(to, from, next) {
      next()
    }

  }

</script>
