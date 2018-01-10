<template>
  <div>
    {{helloMsg}}
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component'
  @Component({

  })
  export default class Hello extends Vue {
    helloMsg = 'hello,grewer';
  }
</script>
