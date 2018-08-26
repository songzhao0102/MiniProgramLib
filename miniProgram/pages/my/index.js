//获取应用实例
var app = getApp()
Page( {
  data: {
  },
  onPullDownRefresh: function () {
    var that=this;
    wx.request({
      url: 'https://micro.applinzi.com/index.php/home/users/index',
      data: {
        openid: app.globalData.openid
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        that.setData({
          userinfos: res.data
        })
      }
    })
    wx.stopPullDownRefresh()
  },
  onLoad: function() {
    var that=this;
    wx.request({
      url: 'https://micro.applinzi.com/index.php/home/users/index',
      data: {
        openid: app.globalData.openid
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        that.setData({
          'userinfos':res.data
        })
      }
    })
    
  },
  onGotUserInfo: function (e) {
  var that=this;
  that.setData({
    'userInfo': e.detail.userInfo
  })
   

  },
  setInfos: function (event) {
    wx.navigateTo({
      url: '../my/setInfo/infos',
    })
  },
})
