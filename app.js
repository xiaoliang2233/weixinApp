//app.js
var wilddog = require('./utils/wilddog-wxapp-all');
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //调用野狗SDK
    var wilddog_config = {
      syncURL: 'https://xiaoliang2233.wilddogio.com',
      authDomain: 'xiaoliang2233.wilddog.com'
    }
    wilddog.initializeApp(wilddog_config);
    this.wilddog_ref = wilddog.sync().ref();
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  addItem:function(text){
    this.ref.push(text);
  },
  getRef:function(){
    return this.wilddog_ref;
  }
})