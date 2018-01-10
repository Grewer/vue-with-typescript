<template>
    <div>
      this is pager.page:
      <div>{{msg}}</div>
      <input type="text" v-model="childMsg">
      <button @click="submit">submit</button>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
      props:{
        msg:String,
      }
    })
    export default class pager extends Vue {
      childMsg:string|null = '';
      submit():void{
        this.$emit('get',this.childMsg);
      }
    }
</script>
