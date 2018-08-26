var app = getApp()
Page({
    data: {
        content: '这是分类页面',
        navRightItems: [],
        isActive: false,
        curNav: 0
    },
    //事件处理函数
    switchRightTab: function(e) {
      var that=this;
      var id = e.target.dataset.id;
      var genre=e.target.dataset.value;
      this.setData({
        curNav: id,
      });
      wx.request({
        url: 'https://micro.applinzi.com/index.php/Home/Book/getGMsgs',
        method: 'POST',
        data: {"g":genre},
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            navRightItems: res.data,
          });
        }
      })
    },
    onLoad: function (e) {
      var that = this;
      wx.request({
        url: 'https://micro.applinzi.com/index.php/Home/Book/getGMsgs',
        method: 'POST',
        data: { g:"手绘读物" },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            navRightItems: res.data,
          });
        }
      })
    },
    switchRightTaba: function (e) {
      var that = this;
      var id = e.target.dataset.id;
      var agegenre = e.target.dataset.value;
      this.setData({
        curNav: id,
      });
      wx.request({
        url: 'https://micro.applinzi.com/index.php/Home/Book/getAGMsgs',
        method: 'POST',
        data: {"ag":agegenre},
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          that.setData({
            navRightItems: res.data,
          });
        }
      })
    }
})