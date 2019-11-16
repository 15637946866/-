var baseUr4 = "https://www.stbz99.com/apps123/news/getNewsIndexInfo"
export function addSearch() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUr4,
      method: 'POST',
      data: {
        moduleId: 6598
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