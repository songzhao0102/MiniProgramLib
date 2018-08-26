Page({
  data: {  
    list: [],
  },
  onLoad: function (options) {  
    var that=this;
    wx.request({
      url: 'https://micro.applinzi.com/index.php/Home/Book/getSMsgs',
      data:{},
      method:'POST',
      success:function(res){
        that.setData(
          {
            list:res.data,
          }
        );
      },
      fail:function(){
      
      },
      complete:function(){

      }
    })
  },
  onReady: function () {    
  },
  onShow: function () {   
  },
  onHide: function () {   
  },
  onUnload: function () {   
  }
})