var baseUrl = "https://www.stbz99.com/apps123/"

export function getCartList() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + "store/getStoreList",
      method: "post",
      data: {
        smTypeId: -1,
        provincId: -1,
        moduleId: 6601,
        currentPage: 1,
        cityId: -1,
        bigTypeId: -1
      },
      success: function(res) {
        resolve(res)
      },
      fail: function(error) {
        reject(error)
      }
    })
  })
}
export function getDetailList(storeId) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + "product/getProductListByStore",  
      data: {
        moduleId: 6600,
        storeId: storeId,
        currentPage:1
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (error) {
        reject(error)
      }
    })
  })
}