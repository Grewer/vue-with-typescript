<template>
  <div>
    <div>{{msg}}</div>
    <input type="text" v-model="childMsg">
    <button @click="submit(childMsg)">submit</button>
  </div>
</template>
<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Pager extends Vue {
    childMsg: string = '';

    @Prop()
    msg: string


    @Emit('get')
    submit() {}
  }
</script>
