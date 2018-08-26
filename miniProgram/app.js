//app.js
App({
  onLaunch: function () {
    var that=this;
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://micro.applinzi.com/index.php/home/login/index',
          data: { code: res.code },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            that.globalData.openid = res.data;
          },
        })
        /* wx.getUserInfo({
          success: function (res) {
            that.globalData.userInfo = res.userInfo
            console.log(res.userInfo);
          }
        })*/
      }
    })
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    openid:null,
    userInfo: null
  }
})