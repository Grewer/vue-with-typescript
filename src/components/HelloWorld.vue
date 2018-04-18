<template>
  <div>
    {{helloMsg}}
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class Hello extends Vue {
    helloMsg = 'hello,grewer';
  }
</script>
