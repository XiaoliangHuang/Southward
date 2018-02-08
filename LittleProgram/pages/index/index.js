//index.js
//获取应用实例
var util = require("../../utils/util.js")
const app = getApp()

Page({
  data: {
    videos: [
        {
          "posterUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/image/poster/1-huashao-web.jpg",
          "videoUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/video/huashao-web.mp4",
          "title": "不要指望队友可以让你躺赢",
          "description": "这是腾讯旗下的爆款手游——王者荣耀做的第一支宣传视频。华少作为官方邀请的名人代表，以自己的人生经历和价值观，对应他对游戏的理解，得出了他面对游戏和人生的真实态度。本片为1分钟的短版，另外还有一支时长5分钟的个人纪录片版本。"
        },
        {
          "posterUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/image/poster/11-mentu-web.jpg",
          "videoUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/video/11-mentu-web.mp4",
          "title": "炼自己，成为下一个",
          "description": "穿越火线的最强王者白鲨、绿豆等，与腾讯官方合作，招募最强门徒。这是招募活动的官方宣传视频，这次拍摄也是我们第一次体验枪战动作类视频的拍摄过程，与上海顶级的特效、烟火和武术指导团队合作，拍摄了一部动作大片。广告中再现了穿越火线激烈的战斗场面，让每一位玩家都感到肾上腺素飙升。"
        }
    ]
  },

setVideoData(res){
    var page = this;
    if(res != null && res.data !=null && res.data.videos != null)
    {
      app.globalData.videos = res.data.videos;
      page.setData({
        videos: res.data.videos
      });
    }
  },

  loadVideoData: function () {
    util.loadConfig(app.globalData.videoConfig, this.setVideoData);
  },

  watchVideo: function(event){
    wx.navigateTo({
      url: '../video/video?id=' + event.currentTarget.dataset.index
    })
  },

  onLoad: function () {
    console.log("index.onload");
    this.loadVideoData();
  },

  onPullDownRefresh: function(){
    console.log("pull down to refresh");
    var page = this;
    wx.stopPullDownRefresh();
    wx.showToast({
      title: '正在刷新',
      icon: 'loading',
      duration: 1000
    });
    
    this.loadVideoData();
  }
})