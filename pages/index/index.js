//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'getApp()在哪里定义的呀?',
    userInfo: {}
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap_chat: function () {
    wx.navigateTo({
      url: '../chat/chat'
    })
  },
  bindViewTap_chat2: function () {
    wx.navigateTo({
      url: '../chat2/chat'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
