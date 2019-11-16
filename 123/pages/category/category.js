// pages/category/category.js
import {
  getCateList,
  getOneCate
} from "../../api/cate.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList: null,
    moduleId: 6600,
    currentIndex: 0,
    animationData: null
    


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    getCateList(this.data.moduleId, function(res) {
      // console.log(res)
      that.setData({
        cateList: res.data.data
      })
      
      
    })
    getOneCate().then((res) => {
     
      console.log(res)
      this.setData({
        product: res.data.data.productList
      })
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  selectOne: function(event) {

    var index = event.currentTarget.dataset.index

    this.setData({
      currentIndex: index
    })
    this.top(index)
  },

  top(index) {
    wx.pageScrollTo({
      scrollTop: index * 200,
      duration: 300,

    })
  },
  gotodetail(event) {
   
    wx.navigateTo({
      url: '/pages/catedetail/catedetail'
    })
  }



})