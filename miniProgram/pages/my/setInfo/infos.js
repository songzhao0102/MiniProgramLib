// pages/my/setInfo/infos.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  inputValue:null,
  },
  bindKeyInput:function(e){
  this.setData({
    inputValue: e.detail.value
  })
},
sendMsg:function(){
  var that=this;
  wx.request({
    url: 'https://micro.applinzi.com/index.php/home/login/binds',
    data: { phone: that.data.inputValue, openid: app.globalData.openid},
    header: {
      'content-type':'application/x-www-form-urlencoded'},
    method: 'POST',
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      wx.showToast({
        title: res.data,
        icon: 'success',
        duration: 2000,
      })
    }
  })
}
})