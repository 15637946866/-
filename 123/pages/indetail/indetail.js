import { getDetail } from "../../api/api1.js"
var WxParse = require("../../wxParse/wxParse.js")
// pages/indetail/indetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pro:null,
    descData:'',
    isShowModal: false,
    animationData: null,
    inputNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getDetail(options.id).then((res) => {
      this.setData({
        pro: res.data.data
      })
      WxParse.wxParse("descData", "html", res.data.data.productDescription, this, 5)
      console.log(res.data.data)
    
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
  showModal() {
    //1. 显示
    //2.增加动画
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    //向上bottom为0
    animation.bottom(0).step()

    this.setData({
      animationData: animation.export(),
      isShowModal: true
    })
  },
  closeModal() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    //向上bottom为0
    animation.bottom(-250).step()

    this.setData({
      animationData: animation.export(),
      isShowModal: false
    })
  },
  sunNum() {
    if (this.data.inputNum <= 0) {
      this.setData({
        inputNum: 0
      })
    } else {
      this.setData({
        inputNum: --this.data.inputNum
      })
    }
  },
  addNum() {
    this.setData({
      inputNum: ++this.data.inputNum
    })
  },
  setVal(event) {
    // console.log(event.detail.value)
    this.setData({
      inputNum: event.detail.value
    })
  },
  join() {
    if (this.data.isShowModal == false) {
      this.showModal();
      return;
    } else {
      if (this.data.inputNum <= 0) {
        wx.showToast({
          title: '请添加数量',
        })
        return;
      }
      wx.showLoading({
        title: '加载中。。。',
      })
          wx.showToast({
            title: '加入购物车成功',
          })
          wx.hideLoading()
        }
  },
})