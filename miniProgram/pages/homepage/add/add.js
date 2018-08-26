Page({
  data: {

    imgUrls:[],
    SS:[],
    News:[],
  },
  LookAll:function(event)
  {
    wx.navigateTo({
      url: '../competitive/competitive',
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://micro.applinzi.com/index.php/Home/Book/getHomeMsgs',
      method: 'POST',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          SS:res.data[1],
          News:res.data[0],
        });
      }
    });
    wx.request({
      url: 'https://micro.applinzi.com/index.php/Home/Actions/getMsgs',
      method: 'POST',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
         imgUrls: res.data,
        });
      }
    });
  }
})