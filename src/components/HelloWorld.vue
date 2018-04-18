<template>
  <div>
    {{helloMsg}}
    {{userName}}
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {State} from 'vuex-class'

  @Component
  export default class Hello extends Vue {
    helloMsg = 'hello,grewer';
    @State userName

    created() {
      console.log(this.userName)
    }
  }
</script>
