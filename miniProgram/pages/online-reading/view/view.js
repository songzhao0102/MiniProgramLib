const app = getApp()
Page({
  data:{
    list:[],
  },
  onReady: function (e) {
    
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onLoad:function(){
    var that = this;
    wx.request({
      url: 'https://micro.applinzi.com/index.php/Home/Voice/getMsgs',
      method: 'POST',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
      that.setData({
        list:res.data
      });
      }
    });
  }
})