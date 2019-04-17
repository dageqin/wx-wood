// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      trees:[
        {
          src:'',
          treename:'铁杉',
          price:'￥1300元/立方米',
          num: 100000,
          address:'临汾市',
          updatedate:'2019-04-16 15:16:01',
          personname:'Kiki',
          vip:'LV3',
          pledge:1000,
          vertify: true
        },
        {
          src: '',
          treename: '铁杉',
          price: '￥1300元/立方米',
          num: 100000,
          address: '临汾市',
          updatedate: '2019-04-16 15:16:01',
          personname: 'Kiki',
          vip: '未开通',
          pledge: 1000,
          vertify: false
        }
      ]
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

  }
})