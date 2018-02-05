//index.js
//获取应用实例
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
        },
        {
          "posterUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/image/poster/39-chaofan-web.jpg",
          "videoUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/video/39-chaofan-web.mp4",
          "title": "父亲的守护",
          "description": "这是我们与浙江省戒毒所合作推出的一部电影短片，影片讲述的是年迈的父亲亲手将自己的儿子送进了戒毒所，在儿子的不理解和埋怨中，父亲默默守护儿子的生活，放弃了养尊处优的生活，而来到湖镇十里坪这样一个偏僻的地方生活。最终当儿子得知真相后，心中充满悔恨。本片获得了浙江省公益电影大赛优秀奖，由龙海珊编剧，沈玎导演。"
        },
        {
          "posterUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/image/poster/8-ppking-web.jpg",
          "videoUrl": "https://shysgg-1255981100.cos.ap-shanghai.myqcloud.com/video/8-ppking-web.mp4",
          "title": "向认真致敬",
          "description": "PPTV聚力旗下的PP•KING裸眼3D手机针对上市推出了以向认真致敬为主题的系列宣传片，其中本片由设计师王平仲代言，王平仲认为建筑设计不是摆在殿堂里的纯艺术，它更重要的意义在于应用。这与产品设计的理念如出一辙，而王平仲在意并不是自己最完美的作品，而是自己作品中的不足。这也引出了向认真致敬的这一主题。"
        }
    ]
  },

  watchVideo:function(event){
    wx.navigateTo({
      url: '../video/video?id=' + event.currentTarget.dataset.index
    })

  },

  onLoad: function () {
    var page = this;
    console.log("index.onload");

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
  },

  onPullDownRefresh: function(){
    console.log("pull down to refresh");
    var page = this;
    wx.stopPullDownRefresh();
    wx.request({
      url: app.globalData.configFile,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("refresh gets data");
        app.globalData.videos = res.data.videos;
        page.setData({
          videos: res.data.videos
        })
      },
      fail: function (res) {
        console.log("refresh failed", res);
      }
    })
  }
})