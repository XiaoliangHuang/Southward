//获取应用实例
var util = require("../../utils/util.js")
var app = getApp()
Page({
  data: {
    team:null
  },

  setTeamData(res) {
    console.log("Loaded team data successfully");
    var page = this;

    if (res != null && res.data != null && res.data.team != null) {
      page.setData({
        team: res.data.team
      });
    }
  },

  loadTeamData: function () {
    util.loadConfig(app.globalData.teamConfig, this.setTeamData);
  },

  onLoad: function () {
    console.log("about.onload");
    this.loadTeamData();
  },

  onPullDownRefresh: function () {
    console.log("pull down to refresh");
    var page = this;
    wx.stopPullDownRefresh();
    wx.showToast({
      title: '正在刷新',
      icon: 'loading',
      duration: 1000
    });

    this.loadTeamData();
  }
})    