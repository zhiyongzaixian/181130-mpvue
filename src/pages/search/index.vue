<template>
  <div id="searchContainer">
    <div class="header">
      <input v-model="searchContent" type="text" placeholder="书中自有黄金屋">
      <span @click="test" class="clean" v-show="searchContent"> X </span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        searchContent: ''
      }
    },
    methods: {
      test(){
        console.log('xxx');
        this.searchContent = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #searchContainer
    .header
      position relative
      input
        width 80%
        height 60rpx
        margin 20rpx auto
        border-bottom 1rpx solid #02a774
      .input-placeholder
        font-size 32rpx
        color #02a774
        text-align center
      .clean
        position absolute
        bottom 10rpx
        right 10%
        width 50rpx
        height 50rpx
        z-index 99
</style>