var baseUrl = "https://www.stbz99.com/apps123/product"

export function getCateList(id, fn) {
  wx.request({
    url: baseUrl + "/getProductType",

    data: {
      moduleId: id
    },
    success: function(res) {
      fn(res)
    }
  })
}
export function getOneCate() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + "/getProductListByCategory",
      method: "post",
      data: {
        smCategoryId: 36199,
        moduleId: 6600,
        currentPage: 1,
        bigCategoryId:''
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