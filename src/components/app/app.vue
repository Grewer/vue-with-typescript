<template>
  <div>
    <Pager :msg="msg" @get="appGet"></Pager>
    测试:
    <div style="margin: 5px;">
      <div>子组件传过来的值:{{rev}};</div>
    </div>
  </div>
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

    appGet(val: string): void {
      this.rev = val;
    }

    beforeRouteEnter(to, from, next){
      console.log(from)
      next()
    }

  }

</script>
