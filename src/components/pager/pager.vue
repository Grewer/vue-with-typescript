<template>
  <div>
    <div>{{msg}}</div>
    <input type="text" v-model="childMsg">
    <button @click="submit">submit</button>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Pager extends Vue {
    childMsg: string = '';

    @Prop()
    msg: string

    submit(): void {
      this.$emit('get', this.childMsg);
    }
  }
</script>
