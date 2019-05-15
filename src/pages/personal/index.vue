<template>
  <div id="personalContainer">
    <div class="header">
      <img class="avatar" :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button @getuserinfo="handleGetUserInfo" open-type="getUserInfo" class="btn">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
      wx.getUserInfo({
        success: (res) => {
          this.userInfo = res.userInfo
        }
      })
    },
    methods: {
      handleGetUserInfo(res){
        console.log(res);
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personalContainer
    .header
      padding 20rpx
      background #02a774
      .avatar
        width 100rpx
        height 100rpx
        border-radius 50rpx
        vertical-align middle
        margin 0 20rpx
      .btn
        display inline-block
        height 60rpx
        font-size 32rpx
        line-height 60rpx
        text-align center
        vertical-align middle
        background rgba(255,255,255,.6)

</style>