//index.js
//获取应用实例
const app = getApp()
import { add, cate, getCateList} from "../../api/api1.js"
import bmap from '../../libs/baidulbs.js'
Page({
  data: {
    cateList:null,
    bannerList:[],
    focusPic:'',
    address: '',
    hot:'',
    cate:[],
    jian:[]
   
  },
  
  /**
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
    var that = this;

    //new 一个BMap对象  设置ak
    var BMap = new bmap.BMapWX({
      ak: 'AygxWkA1rmNGPGHwBLm5FakYzX6S059s'
    });
    //获取经纬度坐标并逆地址解析
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(res);
        BMap.regeocoding({
          location: res.latitude + ',' + res.longitude,
          success: function (res) {
            // console.log(res)
            that.setData({
              address: res.originalData.result.formatted_address

            })
          },
          fail: function () {
            wx.showToast({
              title: '请检查位置服务是否开启',
            })
          },
        });
      },
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
    add().then((res) => {
      this.setData({
        bannerList: res.data.data.adList.detail,
        focusPic:res.data.data.focusPicture.url,
        hot: res.data.data.hotSaleProduct.detail,
        cateList: res
      })
      console.log(res.data.data.hotSaleProduct.detail)
    }),
      cate().then((res) => {
      var arr = []
      arr=res.data.data.slice(3,10)
      arr.splice(2,1)
        this.setData({
          cate: arr
        })
      }),
      getCateList().then((res)=>{
      // console.log(res.data.data.productList)
      this.setData({
        jian: res.data.data.productList
      })
      })
    
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
  goto(event) {
    var id = event.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/indetail/indetail?id=' + id,
    })
  }
 
})
