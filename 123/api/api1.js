var baseUrl = "https://www.stbz99.com/apps123/"
export function add() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl +"homePage/getHomePageInfo",
      method: 'POST',
      data: {
        projectId:968
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
export function cate() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl +"modules/getModulesAndTypeList",
      method: 'POST',
      data: {
        projectId: 968,
        state: 1
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
export function getCateList() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + 'product/getRecommendProductList?moduleId=6600&currentPage=1',
      success: function (res) {
        resolve(res)
      }
    })
  })
}

export function getDetail(id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + 'product/getProductDetail',
      data: {
        productId: id,
      },
      success: function (res) {
        resolve(res)
      }
    })
  })
}