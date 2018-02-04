// pages/video/video.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    posterUrl: null,
    videoUrl: null,
    title: '王者荣耀 TVC - 华少篇',
    description: '在曼城与卡迪夫城的比赛后，德布劳内在采访中表示不理解为何对手总是飞铲。威尔士名宿索夏尔则表示，他很意外卡迪夫城没有进行更多的铲球，而如果他和德布劳内比赛而自己不如对方，他会为了球队“打碎”德布劳内。索夏尔是威尔士传奇门将，他曾代表埃弗顿获得 2 次联赛冠军、2 次足总杯冠军和一次欧洲优胜者杯冠军。退役后的他在媒体面前从不掩饰自己的真实想法。“如果我和德布劳内比赛，而我没他那么出色，那我会打碎(smash)他，因为这就是我为球队的工作。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var index = options.id;
      this.setData(
        {
          posterUrl: app.globalData.videos[index].posterUrl,
          videoUrl: app.globalData.videos[index].videoUrl
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