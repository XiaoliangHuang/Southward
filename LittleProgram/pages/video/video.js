// pages/video/video.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posterUrl: null,
    videoUrl: null,
    title: null,
    description: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var index = options.id;
      this.setData(
        {
          posterUrl: app.globalData.videos[index].posterUrl,
          videoUrl: app.globalData.videos[index].videoUrl,
          title: app.globalData.videos[index].title,
          description: app.globalData.videos[index].description
        }
      )
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
  
  }
})