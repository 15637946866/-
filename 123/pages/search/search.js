// pages/search/search.js
import { addSearch } from "../../api/api4.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cateList: null,
    cateLists: null,
    cateListss: null,
    cateListsss: null
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
    addSearch().then((res) => {
      console.log(res.data.data)
      console.log(res.data.data.newsTypeInfo[0].newsList)
      console.log(res.data.data.newsTypeInfo[1].newsList)
      console.log(res.data.data.newsTypeInfo[2].newsList)
      this.setData({
      cateList: res.data.data,
      cateLists: res.data.data.newsTypeInfo[0].newsList,
      cateListss: res.data.data.newsTypeInfo[1].newsList,
      cateListsss: res.data.data.newsTypeInfo[2].newsList
      })
    })
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