// pages/detail/detail.js
import { getDetailList} from "../../api/api3.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailList:[],
    productId:null,
    isChan:true,
    isGong:false,
    isFu:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      productId: options.id
    })

    getDetailList(options.id).then((res)=>{
      console.log(res.data.data.productList)
      this.setData({
        detailList: res.data.data.productList
      })
    })
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

  },
  nav1(){
    this.setData({
      isChan: true,
      isGong: false,
      isFu: false
    })
  },
  nav2() {
    this.setData({
      isChan: false,
      isGong: true,
      isFu: false
    })
  },
  nav3() {
    this.setData({
      isChan: false,
      isGong: false,
      isFu: true
    })
  }
})