// pages/news/news.js
Page({
  // 下拉刷新
  onPullDownRefresh: function () {
    // wx.showNavigationBarLoading(); //在标题栏中显示加载
    // //模拟加载
    // setTimeout(function () {
    //   // complete
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // }, 1500);
  },
  // 地图
  map:function(event){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  // 扫一扫
  code:function(){
    console.log(1);
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // 调用视频
  video:function(){
    console.log(123111111111111);
    wx.navigateTo({
      url: '../video/video',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../images/banner1.png",
      "../../images/banner2.png",
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    color: "#fff",
    active: "#fed700",
    navTitle:["扫一扫","领取课程","我的课程","全部课程"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/wx',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // console.log("2",res.data);
        that.setData({
          navTitle:res.data,
        })
      }
    });
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