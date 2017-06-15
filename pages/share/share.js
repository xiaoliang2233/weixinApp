const qiniuUploader = require("../../utils/qiniu-wxapp-sdk");
const toKen = require("../../utils/generate_token");

// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageObject: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //es6的对象里的函数写法
  uploadfile(){
    let that = this;
    wx.chooseImage({
      success(res){
        let filePath = res.tempFilePaths[0];
        qiniuUploader.upload(filePath, imageObj => {
          that.setData({
            imageObject: imageObj
          })
        }, err => {
          console.log(err, 'err')
        }, {
          region: "SCN",
          uptoken: toKen.getUpToken(),
          domain: "http://orkfwj2rc.bkt.clouddn.com",
          shouldUseQiniuFileName: true
        })
      }
    })
  }
})
