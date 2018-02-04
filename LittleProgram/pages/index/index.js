//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    videos: null,
  },

  watchVideo:function(event){
    wx.navigateTo({
      url: '../video/video?id=' + event.currentTarget.dataset.index
    })

  },

  onLoad: function () {
    var page = this;
    console.log("index.onload");
    console.log("global.videos = ", app.globalData.videos)

    if(this.videos == null)
    {
      wx.request({
        url: app.globalData.configFile,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log("launch executed");
          app.globalData.videos = res.data.videos;
          page.setData({
            videos: res.data.videos
          })
        },
        fail: function (res) {
          console.log("load config failed", res);
        }
      })
    }
  }
})