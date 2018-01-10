<template>
  <div>
    this is app.page:
    <pager :msg="msg" @get="appGet"></pager>
    测试:
    <div style="margin: 5px;">
      <div>子组件传过来的值:{{rev}};</div>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {Pager} from "@/components/index";

  @Component({
    components: {
      'pager':Pager
    }
  })
  export default class App extends Vue {
    msg = "i'm main App component";
    rev?: string = '';

    appGet(val: string): void {
      this.rev = val;
    }

  }

</script>
