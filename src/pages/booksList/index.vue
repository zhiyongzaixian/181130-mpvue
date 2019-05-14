<template>
  <div id="listContainer">
    <ul>
      <li v-for="(item, index) in booksList" :key="index">
        <img :src="item.image" alt="">
        <div class="bookInfo">
          <p class="bookName">{{item.title}}</p>
          <p class="bookAuthor">{{item.author}}</p>
          <p class="bookPublisher">{{item.publisher}}</p>
        </div>
        <p class="bookPrice">{{item.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
//    onLoad(options){
//      console.log(options);
//    }
    data(){
      return {
        booksList: []
      }
    },
    mounted(){
      console.log(this);
      if(this.$mp){
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #listContainer
    li
      display flex
      padding 10rpx
      border-bottom 1rpx solid #eee
      img
        width 140rpx
        height 140rpx
        margin-right 20rpx
      .bookInfo
        width 67%
        line-height 50rpx
        .bookName
          font-size 28rpx
        .bookAuthor
          font-size 32rpx
        .bookPublisher
          font-size 30rpx

      .bookPrice
        font-size 40rpx
        font-weight bold
        color red
</style>